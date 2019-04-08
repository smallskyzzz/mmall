require('./index.css')
require('../common/nav/index.js')
require('../common/header/index.js')
var _mm = require('../../util/util.js')
var _cart = require('../../service/cart-service.js')
var templateIndex = require('./index.string')

var page = {
    data: {
        productId: _mm.getUrlParam('productId') || ''
    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        // 如果没有穿id自动跳回首页
        if(!this.data.productId){
            _mm.goHome()
        }
        this.loadDetail()
    },
    bindEvent: function () {
        var _this = this
    },
    // 加载商品详情数据
    loadDetail: function () {

    }
}
