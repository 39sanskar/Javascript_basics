// Apply loops in the Object

/*
🔹 for...in loop
Definition: The for...in loop iterates over the enumerable property keys (names) of an object.
It gives you the keys, not the values.
Usually used for objects, not arrays (though it technically works on arrays too, but not recommended).

✅ Syntax:
for (const key in object) {
  // code block using key
}

*/
const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`); 
}
/*
Output:
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "cpp", "java"]

for (const key in programming) {
  console.log(key);
}
/*
Output:
0
1
2
3
4
*/

for (const key in programming) {
  console.log(programming[key]);  
}
/*
Output:
js
rb
py
cpp
java
*/


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
  console.log(key);
} // using for...in loop map is not iteratable

/*
🔹 Why nothing prints?
for...in is designed for enumerating object properties (like keys in a plain object).
A Map is not a plain object; it’s a special iterable structure.
So for...in won’t work on Map, and that’s why nothing gets logged.


🔹 Correct way: use for...of
If you want to loop through a Map, you should use for...of instead:

for (const [key, value] of map) {
  console.log(key, value);
}

👉 Output:
IN India
USA United States of America
Fr France

✅ Summary:
for...in → works with objects (enumerates property names).
for...of → works with iterables like Array, String, Map, Set (gives values or entries).
*/