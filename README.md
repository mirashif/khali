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

const arr = ["Dhaka", "Rajshahi", [1, 2, 3]];
const obj = { city: "Dhaka", nested: { khali: null } };

// It works with array or, object
isKhali(arr[1000]);             // true
isKhali(obj["doesNotExist"]);   // true

isKhali(arr); // false
isKhali(obj); // false

// And of course it works with nested values
isKhali(arr[2][1000]);              // true
isKhali(obj["nested"]["khali"]);    // true

isKhali(arr[2][0]); // false
isKhali(obj.city);  // false
```


# API
## isKhali(value)
- returns boolean
- Returns `true` if the `value` is empty else `false`.
