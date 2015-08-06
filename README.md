# jstransformer-megamark [![The MIT License][license-img]][license-url]

<a href="http://github.com/jstransformers/jstransformer"><img src="https://cdn.rawgit.com/jstransformers/jstransformer/master/logo.svg" align="right" width="100px" height="100px" /></a>

[megamark](https://github.com/bevacqua/megamark) support for [JSTransformers][jstransformers-url].

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-megamark --save
npm test
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var megamark = require('jstransformer')(require('jstransformer-megamark'));

console.log(megamark.render('_Hello_, **world**!').body);
//=> '<p><em>Hello</em>, <strong>world</strong>!</p>'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-megamark/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-megamark
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-megamark.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-megamark
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-megamark.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-megamark
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-megamark.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-megamark
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-megamark.svg

[jstransformers-url]: http://github.com/jstransformers
