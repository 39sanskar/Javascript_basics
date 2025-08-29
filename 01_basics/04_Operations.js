// ******************************* Operations **************************

let value = 3
let negValue = -value
console.log(negValue) // -3


// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2/2); // 1
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.66


// let str1 = "hello"
// let str2 = " Sanskar"
// let str3 = str1 + str2
// console.log(str3)


// these below all operations are performed by EcmaScript (ES6)
// console.log("1" + 2)  // 12
// console.log(1 + "2")  // 12
// console.log("1" + "2")  // 12
// console.log("1" + 2 + 2)  // 122   (if string first then all are treated as String)
// console.log(1 + 2 + 3)  // 6


// console.log(1 + 2 + "3")  // 33   (if string is present in the last then first perform operation then treated as String)
// console.log(1 + "2" + 3)  // 123


// console.log(3 + 4 * 5 % 3);  // 5 (create a problem in the review/PR-request)
// console.log(true); // true
// console.log(+true) // 1
// console.log(true+) // SyntaxError: Unexpected token
// console.log(false-) // SyntaxError: Unexpected token

// console.log(-true); // -1
// console.log(false); // false
// console.log(+false); // 0
// console.log(-false); // -0


let num1 , num2, num3

num1 = num2 = num3 = 2 + 2 
console.log(num1)


let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101


// prefix postfix mdn documentation


// ******************************* Comparision ***********************

// console.log(2 > 1);   // true
// console.log(2 >= 1);  // true
// console.log(2 < 1);  // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("2" > 1); // true (automatically javascript convert 2 as a number.)
// console.log("02" > 1); // true (if you compare two things then must dataTypes of these two thing must be same.)


// Not get predicted result (in JavaScript work for equality == and greater >  operator works in different manner.)
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true (particular in this line null is convert into 0)

/*
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why  (null >= 0 is true) and  (null > 0 is false)
*/

// Basically ==, === these all are different syntax for working, and < , >  these all are different syntax for working.

// console.log(undefined > 0);  // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false


// strict check using ===  (it check value as well as dataType. strictally check)

console.log("2" == 2); // true (here basically, string is convert into number)
console.log("2" === 2);  // false (because type is different.)

