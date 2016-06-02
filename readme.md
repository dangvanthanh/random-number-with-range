# random-number-with-range [![Build Status](https://travis-ci.org/dangvanthanh/random-number-with-range.svg?branch=master)](https://travis-ci.org/dangvanthanh/random-number-with-range)

> Random number with range


## Install

```
$ npm install --save random-number-with-range
```


## Usage

```js
const randomNumberWithRange = require('random-number-with-range');

randomNumberWithRange(1, 50);
//=> Float random between 1 and 50 inclusive

randomNumberWithRange(20, 80, true)
//=> Integer random between 20 and 80
```


## API

### randomNumberWithRange(min, max, isRound)

#### min

Type: `number`

Minimum value possible value to return.

#### max

Type: `number`

Maximum value possible value to return.

#### options

##### isRound

Type: `boolean`<br>
Default: `false`

Whole number returned is Float or Integer. Default is Float.


## License

MIT © [Dang Van Thanh](http://dangthanh.org)
