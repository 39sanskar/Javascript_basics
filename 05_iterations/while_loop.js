// while-loop

/*
🔹 while loop
Definition: A while loop repeats a block of code as long as a given condition is true.
The condition is checked before each iteration.
If the condition is false at the start, the loop body may not run at all.
*/


// let index = 0
// while (index <= 10) {
//   console.log(`Value of index is ${index}`);
//   index = index + 2
// }


let myArray = ['flash', "batman", "superman"]

let arr = 0; // in while loop first initialise the condition
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1
}

/*
🔹 do...while loop
Definition: A do...while loop is similar to a while loop, but the code block is executed at least once before checking the condition.
The condition is checked after each iteration. (first do work then check condition)
*/

let score = 1
do {
   console.log(`Score is ${score}`);
   score++   
} while (score <= 10);


// special case of do-while loop
let marks = 11
do {
   console.log(`Score is ${marks}`);  // Score is 11
   score++   
} while (marks <= 10);
