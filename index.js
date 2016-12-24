'use strict'

var megamark = require('megamark')

exports.name = 'megamark'
exports.inputFormats = ['md', 'markdown', 'megamark']
exports.outputFormat = 'html'

exports.render = function (str, options) {
  return megamark(str, options)
}
