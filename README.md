# Khali
Simply check if your array, object, string, number, etc are empty or not.


# Installation
- with npm  
`npm install khali`
- with yarn  
`yarn add khali`


# Example
```js
import khali from 'khali'

khali([])   // true
khali({})   // true
khali('')   // true
khali(0)    // true

khali(['Dhaka', 'Rajshahi']);   // false
khali({ city: 'Dhaka' });       // false
khali('Bangladesh');            // false
khali(1971);                    // false
```


# API
## khali(value)
- Returns `true` if the `value` is empty.
- Returns `false` if the `value` is NOT empty.
