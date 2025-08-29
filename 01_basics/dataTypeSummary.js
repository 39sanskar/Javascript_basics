// Primitive => it is call by value when you are copy from one place to another place then its original data reference(memory) is not given to you its copy is provide to you and changes are in affect on copy 

// 7 types : String, Number, Boolean, null(empty), undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123'); // return type is also a symbol
const anotherId = Symbol('123') 

console.log(id === anotherId);  // false 

// const bigNumber = 3456789876543234567n   // at the end of the number apply  n that will become bigNumber.


// Reference(Non-Primitive) => in the memory directly reference is allocated

// Arrays, Object,  Functions.

// JavaScript Master => Object and Browser web event.


const heros = ["shaktiman", "naagraj", "doga"]; // Array 

// objects which is inside the curley bracket
let myObj = {
  name: "hitesh",
  age: 22,
}


const myFunction = function(){
  console.log("Hello World!")
}

console.log(typeof bigNumber); // undefined
console.log(typeof outsideTemp); // object
console.log(typeof myFunction); // function-object
console.log(typeof heros); // object 
console.log(typeof myObj); // object
console.log(typeof anotherId); // symbol



/* (Interview)
The following table summarizes the possible return values of typeof.

Type	                            Result
Undefined	                   |    "undefined"
Null	                       |     "object"
Boolean	                     |     "boolean"
Number	                     |     "number"
BigInt	                     |     "bigint"
String	                     |     "string"
Symbol	                     |     "symbol"
Function (implements [[Call]] 
in ECMA-262 terms; are 
functions as well)	         |     "function"
Any other object	           |     "object"

*/
