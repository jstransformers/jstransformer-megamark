# jstransformer-megamark

[Megamark](https://github.com/bevacqua/megamark) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-megamark/master.svg)](https://travis-ci.org/jstransformers/jstransformer-megamark)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-megamark/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-megamark?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-megamark/master.svg)](http://david-dm.org/jstransformers/jstransformer-megamark)
[![NPM version](https://img.shields.io/npm/v/jstransformer-megamark.svg)](https://www.npmjs.org/package/jstransformer-megamark)

## Installation

    npm install jstransformer-megamark

## API

```js
var megamark = require('jstransformer')(require('jstransformer-megamark'));

console.log(megamark.render('_Hello_, **world**!').body);
//=> '<p><em>Hello</em>, <strong>world</strong>!</p>'
```

## License

MIT
