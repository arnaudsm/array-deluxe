# Array-Deluxe 🦸‍♂️
Function programming superpowers for your arrays

```js
import 'array-deluxe'
// OR
require('array-deluxe')
```

## Number functions
```js
const list = [1,1,3]
list.max()     // 3
list.min()     // 1
list.sum()     // 6
list.median()  // 1
list.mean()    // 2.5
list.unique()  // [1,3]
list.shuffle() // [1,3,1]
```
## Object functions
```js
const people = [
    {name:"snap",    age:21},
    {name:"pop",     age:23},
    {name:"crackle", age:21},
];
people.select("name") // ["snap","pop","crackle"]
people.max("age")     // 23
people.min("age")     // 21
people.sum("age")     // 65
people.median("age")  // 21
people.mean("age")    // 21.6..
```

# Todo
- Tests
- TypeScript support