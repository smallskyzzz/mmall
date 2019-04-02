'use strict'
require('./index.css')
require('../common/nav/index.js')
require('../common/header/index.js')
var _mm = require('../../util/util.js')
var _product = require('../../service/product-service.js')
var templateIndex = require('./index.string')

var page = {
    data: {
      listParam: {
          keyword: _mm.getUrlParam('keyword') || '',
          categoryId: _mm.getUrlParam('categoryId') || '',
          orderBy: _mm.getUrlParam('orderBy') || 'default',
          pageNum: _mm.getUrlParam('pageNum') || 1,
          pageSize: _mm.getUrlParam('pageSize') || 20
      }
    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        this.loadList()
    },
    bindEvent: function () {

    },
    loadList: function () {
        var listHtml = '',
            _this = this,
            listParam = this.data.listParam
        _product.getProductList(listParam, function (res) {
            listHtml = _mm.renderHtml(templateIndex, {
                list: res.list
            })
            $('.p-list-con').html(listHtml)
            _this.loadPagination(res.pageNum, res.pages)
        },function (errMsg) {
            _mm.errorTips(errMsg)
        })
    },
    // 加载分页信息
    loadPagination: function (pageNum, pages) {

    }
}

$(function () {
    page.init()
})
