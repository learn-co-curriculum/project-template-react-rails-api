# getenv

[![Build Status](https://secure.travis-ci.org/ctavan/node-getenv.png)](http://travis-ci.org/ctavan/node-getenv)

Helper to get and typecast environment variables. This is especially useful if you are building [Twelve-Factor-Apps](http://www.12factor.net/) where all configuration is stored in the environment.

## Installation

```
npm install getenv
```

## Usage

Set environment variables:

```bash
export HTTP_HOST="localhost"
export HTTP_PORT=8080
export HTTP_START=true
export AB_TEST_RATIO=0.5
export KEYWORDS="sports,business"
export PRIMES="2,3,5,7"
```

Get and use them:

```javascript
var getenv = require('getenv');

var host = getenv('HTTP_HOST'); // same as getenv.string('HTTP_HOST');
var port = getenv.int('HTTP_PORT');
var start = getenv.bool('HTTP_START');

if (start === true) {
  // var server = http.createServer();
  // server.listen(port, host);
}

var abTestRatio = getenv.float('AB_TEST_RATIO');

if (Math.random() < abTestRatio) {
  // test A
} else {
  // test B
}

var keywords = getenv.array('KEYWORDS');
keywords.forEach(function(keyword) {
  // console.log(keyword);
});

var primes = getenv.array('PRIMES', 'int');
primes.forEach(function(prime) {
  // console.log(prime, typeof prime);
});
```

## Methods

All methods accept a fallback value that will be returned if the requested environment variable is not set. If the fallback value is omitted and if the requested environment variable does not exist, an exception is thrown.

### env(name, [fallback])

Alias for `env.string(name, [fallback])`.

### env.string(name, [fallback])

Return as string.

### env.int(name, [fallback])

Return as integer number.

### env.float(name, [fallback])

Return as float number.

### env.bool(name, [fallback])

Return as boolean.

### env.array(name, [type], [fallback])

Split value of the environment variable at each comma and return the resulting array where each value has been typecast according to the `type` parameter. An array can be provided as `fallback`.

### env.multi({spec})

Return a list of environment variables based on a `spec`:

```javascript
var config = getenv.multi({
  foo: "FOO", // throws if FOO doesn't exist
  bar: ["BAR", "defaultval"], // set a default value
  baz: ["BAZ", "defaultval", "string"], // parse into type
  quux: ["QUUX", undefined, "integer"] // parse & throw
});

```

## Changelog

### v0.3.0
- Add getenv.multi() support.

### v0.2.0
- Rename git repository

### v0.1.0
- Initial release

## Authors

- Moritz von Hase (initial author)
- Christoph Tavan <dev@tavan.de>
- Jonas Dohse <jonas@dohse.ch>
- Jan Lehnardt (@janl): `getenv.multi()` support.

## License

This module is licensed under the MIT license.
