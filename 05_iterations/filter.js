const coding = ["js", "ruby", "java", 'python', 'cpp']

const values = coding.forEach((item) => {
  // console.log(item);  
  return item 
})

// console.log(values); // // It does not return a new array → it always returns undefined.



/*
filter:

Definition
The filter() method creates a new array containing all elements of the original array that satisfy a given condition (the callback function returns true).

Syntax:

array.filter(callback(currentValue, index, array), thisArg)

Parameters
-callback → Function to test each element, returning true to keep it or false to discard it.

-currentValue → The current element.
-index (optional) → The index of the current element.
-array (optional) → The original array.

-thisArg (optional) → Value to use as this inside the callback.

Return Value
-A new array containing elements that passed the test.
-If no elements match, it returns an empty array.

✅ Key Differences from forEach
-forEach() → Executes a function for each element (returns undefined).
-filter() → Returns a new filtered array based on a condition.
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const  newNums = myNums.filter( (num) => num > 4)
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


// Concept

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myNewNumber = myNumber.filter( (num) => {
  num > 4
})  // if using parenthesis then it will return myNewNumber easily, otherwise if you using a curley braces then scope is started it will return [] empty array. 
// if you want to return a myNewNumber then using return keyword 
console.log(myNewNumber);  // []


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const NewArray = myArray.filter( (num) => {
  return num > 6   // using return keyword
})
// console.log(NewArray); // [ 7, 8, 9, 10 ]


// Apply forEach 
const myConcept = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newConcept = []

myConcept.forEach( (num) => {
  if (num > 4) {
    newConcept.push(num)
  }
})
// console.log(newConcept); // [ 5, 6, 7, 8, 9, 10 ]



// Book Example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (books) => books.genre === 'History')

  userBooks = books.filter( (books) => { 
    return books.publish >= 1995 && books.genre === "History"  // here we open scope so, using return keyword.
})
console.log(userBooks);