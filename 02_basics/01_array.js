/*
-The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.


Description:

-In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

-JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

-JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

-JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

-JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).(Interview)

-Shallow copy(changes are reflect in the original array) => A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

-Deep copy(changes are not reflect on the original array) => A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.

*/


const myArr = [0, 1, 2, 3, 4, 5]  // indexing of the array is start from 0
// console.log(myArr[0]); // 0 
// console.log(typeof myArr); // object

const myHeros = ["saktiman", "naagraj"]
// console.log(myHeros); // [ 'saktiman', 'naagraj' ]


const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2); //  [ 1, 2, 3, 4 ]

// inside array you have to access prototype 

myArr.push(6, 7); // basically push is a method in the arry it will add the element in the array.
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop();   // pop() in this method no need to pass any value , it will remove the last element of the array.
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

/*
What is unshift()?
-The unshift() method adds one or more elements to the beginning of an array and shifts the existing elements to higher indexes.
*/
myArr.unshift(0)  // unshift() operation need to pass an argument, it add the value at the begining of the array, so shift all the existing value in the array it is time-consuming operation. (this is not more optimized.)
// console.log(myArr); // [0 , 0, 1, 2, 3, 4, 5, 6]

myArr.shift(); // in the shift() operation their is no need to pass value , shift() operation remove the first element in the array.
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]


// console.log(myArr.includes(9)); // fasle (check 9 is present or not in the array.)
// console.log(myArr.indexOf(19));  // -1   (if particular index is not present then it will return  -1)
// console.log(myArr.indexOf(9));  // -1    (if particular index is not present then it will return  -1)


const newArr = myArr.join() // basically join() can do binding the array and its type is string.

console.log(newArr); // 0,1,2,3,4,5,6
console.log(typeof newArr); // string


// slice, splice (👍 interview)

console.log("A ", myArr); // A  [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3)  // start from 1 and 3 is not include.
console.log(myn1);  // [1, 2]
console.log("B ", myArr);  // B  [0, 1, 2, 3, 4, 5, 6]

/*
slice(): 
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

-@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

-@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
*/


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  //  C  [ 0, 4, 5, 6 ]
console.log(myn2); // [ 1, 2, 3 ]
/*
splice(): 
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount
The number of elements to remove. Omitting this argument will remove all elements from the start paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.

@returns — An array containing the elements that were deleted.

*/

/*

-splice() Overview
-splice() changes the contents of an array in place by:
-removing elements
-inserting new elements
or both
-And it always returns an array of the deleted elements.


Syntax: 
-array.splice(start, deleteCount, item1, item2, ...);
-start: index to begin changes
-deleteCount: how many items to remove
-item1, item2...: optional → items to insert at that position
-returns: array of removed elements


Examples
1. Remove elements

let arr = [1, 2, 3, 4, 5];

// remove 2 elements starting from index 1
let removed = arr.splice(1, 2);

console.log(arr);     // [1, 4, 5]
console.log(removed); // [2, 3]


2. Insert elements
let arr = [1, 4, 5];

// start at index 1, delete 0, insert 2 and 3
arr.splice(1, 0, 2, 3);

console.log(arr); // [1, 2, 3, 4, 5]


3. Replace elements
let arr = [1, 2, 3, 4, 5];

// start at index 2, remove 2 items, insert "a" and "b"
arr.splice(2, 2, "a", "b");

console.log(arr); // [1, 2, "a", "b", 5]



4. Remove till the end

let arr = [1, 2, 3, 4, 5];
// start at index 3, no deleteCount → removes everything from index 3
let removed = arr.splice(3);
console.log(arr);     // [1, 2, 3]
console.log(removed); // [4, 5]


🔹 splice()
-Modifies the original array (in-place).
-Can remove, replace, or insert elements.
-Returns an array of the deleted elements.


Example:
let arr = [1, 2, 3, 4, 5];

// Remove 2 elements from index 1
let removed = arr.splice(1, 2);

console.log(arr);     // [1, 4, 5]  <-- original changed
console.log(removed); // [2, 3]


🔹 slice()
-Does NOT modify the original array (creates a shallow copy).
-Only extracts a portion of the array.
-Returns a new array with the selected elements.


Example:

let arr = [1, 2, 3, 4, 5];

// Extract elements from index 1 to 3 (not including 3)
let sliced = arr.slice(1, 3);

console.log(arr);     // [1, 2, 3, 4, 5]  <-- original unchanged
console.log(sliced);  // [2, 3]

Comparision Table: 

|   Feature.            |   `splice()`   (Mutates)       |   `slice()`   (Non-mutating)   |
| --------------------- | -----------------------------  | ------------------------------ |
|   Modifies array      | ✅ Yes — changes the original  | ❌ No — returns a new array     |
|   Returns             | Array of **deleted elements**  | A  shallow copy  of elements   |
|   Insert elements     | ✅ Yes — can add new elements  | ❌ No                           |
|   Replace elements    | ✅ Yes — can remove & insert   | ❌ No                           |
|   Use case            | Editing the array in place     | Extracting part of an array    |

✅ Rule of thumb:
-Use slice() if you just want a copy of part of the array.
-Use splice() if you need to edit the array (remove/insert/replace).

*/

