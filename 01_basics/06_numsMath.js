const score = 400 
console.log(score) // 100

const balance = new Number(100)
console.log(balance); // [Number: 100] // Also Run in console 

/*

Explanation:
-Number (with a capital N) is a constructor in JavaScript.
-Using new Number(100) creates a Number object, not a primitive number.
-So balance here is an object wrapper around the primitive value 100.
-That’s why console.log(balance) shows [Number: 100], indicating it’s an object.

*/

console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2));  // 100.00 (specially precision value)

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));   // 23.9  // it gives precision value and only 3 digit.

const otherNumberOne = 123.8966
console.log(otherNumberOne.toPrecision(3));   // 124


const otherNumberTwo = 1123.8966
console.log(otherNumberTwo.toPrecision(3));  // 1.12e+3


const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 US standards
console.log(hundreds.toLocaleString('en-In'));  // 10,00,000


// ++++++++++++++++++++++++++++ Maths(it comes with Javascript by default) ++++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4));   // 4 (Negative is convert into positive, but positive is still positive.)


console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5  (it choose the top value)
console.log(Math.floor(4.9)); // 4 (it choose the lowest value)
console.log(Math.floor(4.2)); // 4 (it choose the lowest value)
console.log(Math.min(4, 3, 6, 8));  // 3 (it choose the min value)
console.log(Math.max(4, 3, 6, 8));  // 8 (it choose the max value)

console.log(Math.random()); // 0.17391324471797032 (it throw the value in between 0 to 1 (1 is not include) mostly in the decimal)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); // roundoff lowest

/*
Step 1: Math.random()
-Math.random() returns a floating-point number in the range:
0  <=  value  <  1
-Example: 0.2345, 0.9993, 0.0567, etc.

Step 2: Multiply by 10
-(Math.random() * 10) stretches that range from [0, 1) to [0, 10).
-Example outputs: 0.2345 * 10 = 2.345, 0.9993 * 10 = 9.993.

Step 3: Add 1
-(... + 1) shifts the range upward by 1 unit.
-Now the range becomes:
1 <= value < 11

-So the final result will always be a decimal number between 1 (inclusive) and 11 (exclusive).
-Example outputs: 1.2345, 10.5432, 3.789.


-✅If you wanted an integer between 1 and 10, you’d usually combine this with Math.floor:
console.log(Math.floor(Math.random() * 10) + 1);
-That guarantees integers like: 1, 2, 3, ..., 10.

*/


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/*

-Step 1: Math.random()
-Produces a decimal between 0 (inclusive) and 1 (exclusive):
0 <= value < 1

-Step 2: Multiply by (max - min + 1)
(max - min + 1) → here it’s (20 - 10 + 1) = 11.
-So now:
0 <= value < 11
-Example: 0.345 * 11 = 3.795.

-Step 3: Math.floor(...)
-Math.floor() removes the decimal part, leaving an integer:
0 <= value <= 10
-(notice that 10 is possible, but never 11).

-Step 4: Add min
-Finally, + min shifts the range upward to start at min.
-Range becomes:
10 <= value <= 20

✅ So the code will generate a random integer between 10 and 20 (inclusive).
Possible outputs: 10, 11, 12, ..., 20.

👉 Quick mental model:
Math.random() * (max - min + 1) → gives width of range.
(+ min) → shifts it into the desired starting point.

*/

