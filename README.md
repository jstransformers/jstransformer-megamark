# jstransformer-megamark

[Megamark](https://github.com/bevacqua/megamark) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-megamark/master.svg)](https://travis-ci.org/jstransformers/jstransformer-megamark)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-megamark/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-megamark)
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
