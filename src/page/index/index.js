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
