'use strict'
require('../../page/common/nav/index.js')
require('../../page/common/header/index.js')
var navSide = require('../../page/common/nav-side/index.js')
var _mm = require('../../util/util.js')

navSide.init({
    name: 'user-center'
})
// 测试代码
// _mm.request({
//     url: './test.do',
//     success: function(res){
//         console.log(res)
//     },
//     error: function(errMsg) {
//         console.log(errMsg)
//     }
// })
//
// console.log(_mm.getUrlParam('test'))
//
// var html = '<div>{{data}}</div>'
// var data = {
//     data: 123
// }
// console.log(_mm.renderHtml(html, data))

