const score = 400
console.log(score);
const balance = new Number(500) // 100% it is return a number.
console.log(balance);

console.log(balance.toString().length);
// string has a several properties.

console.log(balance.toFixed(2));
// this toFixed method is always use for a build e-comerse app.

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

//(method) Number.toPrecision(precision?: number): string
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

//@param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.

const hundreds = 1000000
console.log(hundreds.toLocaleString());
//toLocaleString it is basically US based.

console.log(hundreds.toLocaleString('en-IN'));
//toLocaleString('en-IN') it is convert to rupees in indian value .

// ++++++++++ Maths +++++++++++++

console.log(Math);
// it is a oject [Math] {}
// all property access by .(dot)

console.log(Math.abs(-4));
// while using absolute then use absolute value that has to be negative value is convert to positive value .

console.log(Math.round(4.6));// it return 5.
console.log(Math.ceil(4.6));//it choose the top value(it return 5)

console.log(Math.floor(4.9));// it return 4(floor is choose bottom value.)

console.log(Math.min(4 , 3, 6 , 8));// it will be return minimum value that is 3.
console.log(Math.max(4 , 5 , 8, 9));// it will be return maximum value that is 9.

console.log(Math.random());// it return the value in between 0 to 1.(randomally it also include 0)

console.log(Math.random()*10);

console.log((Math.random()*10) + 1);
// Adding 1 for remove the case that has the value is 0.(adding the bracket that has wrap (Math.random()*10)).

console.log(Math.floor(Math.random()*10)+1);// it returns the value in between 1 to 9. and add 1 to  avoid the case of 0.


const min = 10
const max = 20

//Formula
//Math.random()*(max - min + 1)

console.log(Math.floor(Math.random() * (max - min + 1)) + min);











