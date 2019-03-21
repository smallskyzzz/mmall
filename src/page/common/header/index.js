require('./index.css')
var _mm = require('../../../util/util.js')

var header = {
    init: function () {
        this.bindEvent()
    },
    onLoad: function() {
        var keyword = _mm.getUrlParam('keyword')
        // keyword存在则回填触发
        if(keyword){
            $('#search-input').val(keyword)
        }
    },
    bindEvent: function () {
        var _this = this
        $('#search-btn').click(function () {
            _this.searchSubmit()
        })
        // 输入回车也可搜索提交
        $('#search-input').keyup(function (e) {
            if (e.keyCode === 13) {
                _this.searchSubmit()
            }
        })
    },
    // 搜索提交
    searchSubmit: function() {
        var keyword = $.trim($('#search-input').val())
        // 如果提交的时候有keyword，跳转到list页，否则返回首页
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword
        }else {
            _mm.goHome()
        }
    }
}

header.init()
