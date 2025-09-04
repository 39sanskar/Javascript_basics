const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNums = myNumbers.map( (num) => {return num + 10})
// console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18]


// chaining  => when chaining is apply first method chain is apply in the second method chain.
const newNums = myNumbers
                .map((num) => num * 10)
                .map( (num) => num + 1) // Each method’s output becomes the input for the next method.
console.log(newNums)  // [ 11, 21, 31, 41, 51, 61, 71, 81 ]


/*

🔹 What is chaining?
-Chaining means calling multiple methods one after another on the same array (or object).
-Each method’s output becomes the input for the next method.
Example:

arr.map().filter().reduce()

🔹 How it works here

Suppose:

const myNumbers = [1, 2, 3, 4, 5];

First map:

.map((num) => num * 10)
→ Multiplies each element by 10
→ Result: [10, 20, 30, 40, 50]

Second map:

.map((num) => num + 1)
→ Adds 1 to each element of the previous result
→ Result: [11, 21, 31, 41, 51]

🔹 Final Output:
console.log(newNums); // [11, 21, 31, 41, 51]

✅ In short:
-Chaining lets you process data step by step in a clean way.
-Instead of writing intermediate variables, you directly chain methods together.

*/


const myArray = [1, 2, 3, 4, 5, 6, 7, 8,]

const newArray = myArray
                 .map( (num) => num * 10)
                 .map( (num) => num + 1)
                 .filter( (num) => num >= 40)
console.log(newArray); // [ 41, 51, 61, 71, 81 ]
               