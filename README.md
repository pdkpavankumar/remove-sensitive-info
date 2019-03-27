# remove-sensitive-info
[![Build Status](https://travis-ci.com/pdkpavankumar/remove-sensitive-info.svg?branch=master)](https://travis-ci.org/pdkpavankumar/remove-sensitive-info) [![dependencies Status](https://david-dm.org/pdkpavankumar/remove-sensitive-info/status.svg)](https://david-dm.org/pdkpavankumar/remove-sensitive-info) [![devDependencies Status](https://david-dm.org/pdkpavankumar/remove-sensitive-info/dev-status.svg)](https://david-dm.org/pdkpavankumar/remove-sensitive-info?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

Install `remove-sensitive-info` into to your project via `npm`:

```shell
$ npm install remove-sensitive-info --save-dev
```

## Usage

new SensitiveInfo(config).parse(text) --- returns parsed text replacing all the sensitivie info (email, ssn, phone)

config:Object

```js
config = {
   pattern: '####',  // sensitive info will be replaced with this string
   nodefaults: true // to remove default regex. by defaul this is false
   regex: {
     regexPattername1: regex1,  // custom regex
     regexPatternname2: [ regex21, regex22, regex33] // multiple custom regex
   }
}
```
## example1:

```js
import SensitiveInfo from 'remove-sensitive-info'

initialization(){
   sensitiveinfo = new SensitiveInfo(config);
}

method(){
   console.log(sensitiveinfo.parse('some awesome text with email pavankumar8545@gmail.com'));
}
```
output:
```sh
some awesome text with email *****
```


## example2:

```js
import SensitiveInfo from 'remove-sensitive-info'

initialization(){
   sensitiveinfo = new SensitiveInfo({
  pattern: '####',
  nodefaults: true,
  regex: {
    regex1: 'hello'
  }
});
}

method(){
console.log(sensitiveinfo.parse(['hello pavankumar8545@gmail.com', 'hello pavankumar8545@gmail.com']));}
```
output:
```sh
[ "#### pavankumar8545@gmail.com", "#### pavankumar8545@gmail.com" ]
```


# License

MIT © P D K Pavan Kumar
