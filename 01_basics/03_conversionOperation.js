/*

let score = "33"

console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score); // guarrenty here score is convert into number
console.log(typeof valueInNumber); // number

console.log(valueInNumber);  // 33
// if let score = "33" then  console.log(valueInNumber) is 33 

*/



let score = "33cab"

console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score); // guarrenty here score is convert into number
console.log(typeof valueInNumber); // number

console.log(valueInNumber);   
// if let score = "33cab" when score is not assign to pureNumber  console.log(valueInNumber) is NaN(Not a Number)



/*

// in case of null

let score = null

console.log(typeof score);   // object
console.log(typeof(score)); // object

let valueInNumber = Number(score); // guarrenty here score is convert into number
console.log(typeof valueInNumber); // number

console.log(valueInNumber);   // it print  0
 
*/


/*
// in case of undefined

let score = undefined

console.log(typeof score);  // undefined
console.log(typeof(score)); // undefined

let valueInNumber = Number(score); // guarrenty here score is convert into number
console.log(typeof valueInNumber); // number

console.log(valueInNumber);   // it print  NaN

*/


/*

// In the case of Boolean value

let score = true

console.log(typeof score);  // boolean
console.log(typeof(score)); // boolean 

let valueInNumber = Number(score); // guarrenty here score is convert into number
console.log(typeof valueInNumber); // number

console.log(valueInNumber);   // in case of true print 1,  in case of false print 0.

*/

// "33" => 33
// "33cab" => NaN
// true => 1, false => 0



// Convert in Boolean

let isLoggedIn = 1

let booleanIsLoggedIN = Boolean(isLoggedIn)

console.log(booleanIsLoggedIN) // true

// Notes 
// let isLoggedIn = 1 => true;  let isLoggedIn = 0 => false
// let isLoggedIn = "" => false
// let isLogggedIn = "hitesh" => false



// Convert in String
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber) // 33
console.log(typeof stringNumber) // string
