var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin') // 单独打包css的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 获取html的打包方法
var getHtmlConfig = function (name) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        inject: true,
        hash: true,
        chunks: ['common', name] // 这里自动将common模块和当前的index模块引入到了html文件中
    }
}

var config = {
    entry: {
        'common': ['./src/page/common/index.js'], // 这个是通用的js模块，即打包后自动加入进了base.js,无需再手动引入一遍
        'index': ['./src/page/index/index.js'],
        'list': ['./src/page/list/index.js'],
        'login': ['./src/page/login/index.js'],
        'register': ['./src/page/register/index.js'],
        'result': ['./src/page/result/index.js']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/', // 这个路径是打包后的引入文件的前缀，需要加上才会触发webpack-dev-server刷新机制以及让引入的路径正确
        filename: 'js/[name].js'
    },
    externals:{
        'jquery': 'window.jQuery'
    },
    module: {
        // loaders: [
        //     {test: /\.(gif|png|jpg)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]'}
        // ],
        rules: [
            { // webpack 3.x写法
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.string$/,
                use: 'html-loader'
            },
            {// 处理写在css中的图片
                test: /\.(gif|png|jpg|woff|woff2|svg|eot|ttf)$/i,
                use: [
                  {
                    // 将图片处理成base64时候使用
                    loader: 'url-loader',
                    // loader: 'file-loader',
                    options: {
                      // 小于2k的图片处理成64编码，大于就交给file-loader处理
                      limit: 200,
                      // publicPath: '../', // 此处加上publicPath，否则打包后的css引入图片的路径会有问题
                      // 图片打包后存在assets文件下[名称]-[5位哈希值].[自身文件类型]
                      name: 'assets/[name]-[hash:5].[ext]'
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({ // 这个打包是将通用的模块打包（即多个js中都引入的模块）
            name: 'common',
            filename: 'js/base.js'
        }),
        new ExtractTextPlugin('css/[name].css'), // css的打包
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('list')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),
        new HtmlWebpackPlugin(getHtmlConfig('register')),
        new HtmlWebpackPlugin(getHtmlConfig('result'))
    ],
    devServer: { // 跨域的配置
        proxy: {
            '/api/*': {
                target: 'http://happymmall.com/',
                pathRewrite: {
                    '^/api': '/'
                },
                secure: true,
                changeOrigin: true
            }
        }
    }
}
module.exports = config
