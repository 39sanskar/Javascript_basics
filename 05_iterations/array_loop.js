// Higher order array loops


// [{}, {}, {}] => Object inside Array


// forof loop

/*
🔹 for...of loop
Definition: The for...of loop is used to iterate directly over the values of an iterable object (like arrays, strings, maps, sets, etc.). {🔹 interview}
It’s cleaner than a traditional for loop when you only care about the values, not the indexes/keys.

Syntax: 

for (const element of iterable) {
  // code block using element
}

*/
// for...of loop is Apply in the array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // here no need of declaration and increment 
  console.log(num);    
}

// for...of loop is Apply in the string
const greetings = "Hello World"
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// for...of loop is apply in the maps
/*
maps => The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
-Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

// Example: 
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete("b");

console.log(map.size);
// Expected output: 2

*/

/*

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

Output:
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
/*
Output: 

Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const key of map) {
  console.log(key);  
}
/*
Output:
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for (const [key, Value] of map) {
  console.log(key,':-', Value);
}
/*
Output: 

IN :- India
USA :- United States of America
Fr :- France
*/


// const myObject = {
//   'game1': 'NFS',
//   'game2': 'Spiderman'
// }

// for (const [key, value] of myObject) {
//   console.log(key, ':-', value); // TypeError: myObject is not iterable // (particular syntax is not work in the Object)
// }
