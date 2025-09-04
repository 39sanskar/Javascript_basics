/*
-The forEach() function in JavaScript is a built-in array method that executes a provided callback function once for each element in an array, in order.

Definition

Syntax:

array.forEach(callback(currentValue, index, array), thisArg)

Parameters
-callback → A function to execute on each element. It takes up to three arguments:
-currentValue → The current element being processed.
-index (optional) → The index of the current element.
-array (optional) → The array on which forEach was called.
thisArg (optional) → A value to use as this inside the callback.

Key Points

-It does not return a new array → it always returns undefined.
-It is mainly used for iteration (executing some logic on each array element).
-It cannot be stopped with break or continue (unlike loops).
-Works only on arrays (not objects directly, unless converted to an array).

Example:

const numbers = [1, 2, 3, 4];

numbers.forEach(function(num, index) {
  console.log(`Index: ${index}, Value: ${num}`);
});

Output:

Index: 0, Value: 1
Index: 1, Value: 2
Index: 2, Value: 3
Index: 3, Value: 4

*/


const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (item){ // because it is callback function it has no name
  // console.log(item);
})

// using arrow function
coding.forEach( (item) => {
  // console.log(item);  
})

// interesting
function printMe(item){
  // console.log(item);  
}

coding.forEach(printMe) // only pass function reference not to execute


coding.forEach((item, index, arr)=> {
  // console.log(item, index, arr);
})
/*
Output:

js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/


const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach( (item) => {
  console.log(item.languageName);
})
/*
javascript
java
python
*/