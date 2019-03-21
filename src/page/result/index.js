require('./index.css')
require('../common/nav-simple/index.js')
var _mm = require('../../util/util.js')

$(function () {
    var type = _mm.getUrlParam('type') || 'default'
    var $element = $('.' + type + '-success').show()
})
