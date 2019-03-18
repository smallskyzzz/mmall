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
        'login': ['./src/page/login/index.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    externals:{
        'jquery': 'window.jQuery'
    },
    module: {
        // loaders: [
        //     {test: /\.css$/, loader:ExtractTextPlugin.extract('style-loader', 'css-loader')}
        // ]
        rules: [{ // webpack 3.x写法
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({ // 这个打包是将通用的模块打包（即多个js中都引入的模块）
            name: 'common',
            filename: 'js/base.js'
        }),
        new ExtractTextPlugin('css/[name].css'), // css的打包
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login'))
    ]
}
module.exports = config
