'use strict'
require('./index.css')
require('../../page/common/nav/index.js')
require('../../page/common/header/index.js')
require('../../util/slider/index.js')
var navSide = require('../../page/common/nav-side/index.js')
var templateBanner = require('./banner.string')
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

$(function () {
    // 渲染banner的html
    var bannerHtml = _mm.renderHtml(templateBanner)
    $('.banner-con').html(bannerHtml)
    // 初始化banner
    var $slider = $('.banner').unslider({
        dots: true
    })
    // 前后按钮操作的事件绑定
    $('.banner-con .banner-arrow').click(function () {
        var forward = $(this).hasClass('prev') ? 'prev' : 'next'
        $slider.data('unslider')[forward]()
    })
})
