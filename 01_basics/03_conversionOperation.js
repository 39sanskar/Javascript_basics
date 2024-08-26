let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber);//NAN(Not a Number.)it is also a special type.
// let score = null // it return 0.
// let score = undefined // it return NAN.
// let score = True // it return 1.
// let score = "Sanskar" // it return NAN

// "33" => 33
// "33abc" => NAN(it is typr of Number).
// true = 1; false = 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // it return TRUE.

//1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // it return 33
console.log(typeof stringNumber);// it return String

// *************Operations**********
let value = 3
let negValue = -value
console.log(negValue)// it return -3

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = " Sanskar"

let str3 = str1 + str2
console.log(str3);// it return hello Sanskar

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1"+ 2 + 2);//122
// console.log(1 + 2 + "2");//32
// console.log((3 + 4) * 5 % 3);//2

// console.log(true);//true
// console.log(+true);//1
// console.log(true+);//not correct

console.log(+"");//it return 0 but not do this.

// let num1 , num2 , num3
// num1 = num2 = num3 = 2 + 2 // not do this ..

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);// 101
// prefix and postfix operator also read.in MDN

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion









