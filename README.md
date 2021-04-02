# Khali (Khāli; meaning, Empty)
[![npm version](https://img.shields.io/npm/v/khali.svg?label=version)](https://www.npmjs.org/package/khali)
[![install size](https://packagephobia.now.sh/badge?p=khali)](https://packagephobia.now.sh/result?p=khali)
[![npm downloads](https://img.shields.io/npm/dm/khali.svg)](http://npm-stat.com/charts.html?package=khali)
[![GitHub issues](https://img.shields.io/github/issues/zanvent/khali)](https://github.com/zanvent/khali/issues)
[![GitHub forks](https://img.shields.io/github/forks/zanvent/khali)](https://github.com/zanvent/khali/network)
[![GitHub stars](https://img.shields.io/github/stars/zanvent/khali)](https://github.com/zanvent/khali/stargazers)
[![GitHub license](https://img.shields.io/github/license/zanvent/khali)](https://github.com/zanvent/khali/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fzanvent%2Fkhali)

Simply check if your array, object, nested stuff, string, number, etc are empty or not.


# Installation
- with npm  
`npm install khali`
- with yarn  
`yarn add khali`


# Usage examples
```js
import isKhali from "khali";

// Regular stuff
isKhali([]);    // true
isKhali({});    // true
isKhali("");    // true
isKhali(0);     // true

const arr = ["Dhaka", ["Uttara", [1, 2]]];
const obj = {
        city: "Dhaka",
        location: {
          latitude: "23.809473999508782",
          longitude: "90.4151957081839",
        },
      };

// It works with array or, object
isKhali(arr[10]);           // true
isKhali(obj["capital"]);    // true

isKhali(arr); // false
isKhali(obj); // false

// And of course it works with nested values
isKhali(arr[0][100]);               // true
isKhali(obj["location"]["area"]);   // true

isKhali(arr[0][0]); // false
isKhali(obj.city);  // false
```


# API
## isKhali(value)
- Returns `boolean`
- Returns `true` if the `value` is empty else `false`.
