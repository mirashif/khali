# Khali (Khāli; meaning, Empty)
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
