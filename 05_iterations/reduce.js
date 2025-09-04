// reduce function

/*
🔹 Definition
The reduce() method executes a callback function on each element of the array, resulting in a single output value.

🔹 Syntax
array.reduce(callback, initialValue)

Parameters:
-callback → A function that runs on each element of the array.

It takes 4 arguments:
-callback(accumulator, currentValue, currentIndex, array)
-accumulator → result carried over from the previous iteration
-currentValue → current element of the array
-currentIndex → index of the current element

-array → the original array
-initialValue (optional) → value to start with.
-If not provided, the first element of the array is used as the initial accumulator, 
and iteration starts from the 2nd element.



🔹 When to use reduce()?
-When you want to accumulate values into:
-A number (sum, product, average, max/min, etc.)
-An array (flatten, transform, etc.)
-An object (grouping, counting, mapping, etc.)

Example:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

Explanation:

Step-by-step Execution:

Initial Value (acc = 0) → we provided 0 as the initialValue.
First iteration
acc = 0, curr = 1
acc + curr = 0 + 1 = 1
New acc = 1

Second iteration
acc = 1, curr = 2
acc + curr = 1 + 2 = 3
New acc = 3

Third iteration
acc = 3, curr = 3
acc + curr = 3 + 3 = 6
New acc = 6

Fourth iteration
acc = 6, curr = 4
acc + curr = 6 + 4 = 10
New acc = 10

Fifth iteration
acc = 10, curr = 5
acc + curr = 10 + 5 = 15
New acc = 15

✅ Final result: 15
*/

// Example: Find maximum
const numbers = [10, 50, 30, 70, 20];
const max = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, numbers[0]);
console.log(max); // 70

/*

Step-by-step:
Initial value = numbers[0] = 10
Iterations:
acc = 10, curr = 10 → max = 10
acc = 10, curr = 50 → 50 > 10 → acc = 50
acc = 50, curr = 30 → 30 < 50 → acc = 50
acc = 50, curr = 70 → 70 > 50 → acc = 70
acc = 70, curr = 20 → 20 < 70 → acc = 70
✅ Final result: 70

*/

// 🔹 Example: Flatten an Array
const arr = [[1, 2], [3, 4], [5]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5]

/*

Step-by-step:
Initial value = [] (empty array)
acc = [], curr = [1, 2] → acc.concat(curr) = [1, 2]
acc = [1, 2], curr = [3, 4] → [1, 2].concat([3, 4]) = [1, 2, 3, 4]
acc = [1, 2, 3, 4], curr = [5] → [1, 2, 3, 4].concat([5]) = [1, 2, 3, 4, 5]
✅ Final result: [1, 2, 3, 4, 5]

*/

// 🔹 Example: Count Occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }

/*
Concept:

(acc[fruit] || 0)
-The || (OR) operator returns the first truthy value.
-If acc[fruit] already has a value (say 2), it returns that.
-If acc[fruit] is undefined (because this is the first time the fruit is seen), it falls back to 0.
So:
-If fruit not counted yet → (undefined || 0) → 0
-If fruit counted already → (2 || 0) → 2


Step-by-step:

Initial value = {} (empty object)
acc = {}, curr = 'apple'
→ acc['apple'] = (undefined || 0) + 1 = 1
→ acc = { apple: 1 }

acc = { apple: 1 }, curr = 'banana'
→ acc['banana'] = (undefined || 0) + 1 = 1
→ acc = { apple: 1, banana: 1 }

acc = { apple: 1, banana: 1 }, curr = 'apple'
→ acc['apple'] = (1 || 0) + 1 = 2
→ acc = { apple: 2, banana: 1 }

acc = { apple: 2, banana: 1 }, curr = 'orange'
→ acc['orange'] = (undefined || 0) + 1 = 1
→ acc = { apple: 2, banana: 1, orange: 1 }

acc = { apple: 2, banana: 1, orange: 1 }, curr = 'banana'
→ acc['banana'] = (1 || 0) + 1 = 2
→ acc = { apple: 2, banana: 2, orange: 1 }

acc = { apple: 2, banana: 2, orange: 1 }, curr = 'apple'
→ acc['apple'] = (2 || 0) + 1 = 3
→ acc = { apple: 3, banana: 2, orange: 1 }

✅ Final result: { apple: 3, banana: 2, orange: 1 }
*/


// Concept => use in the shopping cart
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currentValue) {
  console.log(`acc: ${acc} and currentvalue: ${currentValue}`);
  
  return acc + currentValue
}, 0) // here 0 is the starting point

console.log(myTotal); // 6


// Write in the arrow function 

const myArray = [1, 2, 3, 4]

const myTotalValue = myArray.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotalValue); // 10


const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data-science course",
    price: 12999
  },
  {
    itemName: "python course",
    price: 1999
  }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay); // 23996
