'use strict'
var _mm = require('../../util/util.js')

_mm.request({
    url: './test.do',
    success: function(res){
        console.log(res)
    },
    error: function(errMsg) {
        console.log(errMsg)
    }
})

console.log(_mm.getUrlParam('test'))

var html = '<div>{{data}}</div>'
var data = {
    data: 123
}
console.log(_mm.renderHtml(html, data))
