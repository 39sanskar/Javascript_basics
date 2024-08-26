//kis tarah se data ko memory me rakha jata hai and access kiya jata hai.
//that has two types.Primitive and Non-Primitive(Reference -type).

//Primitive - that is call by value.when we copy from one place to another place then original data reference is not given but its copy is given to you .and if you make changes then that's changes in a only copy ..

// 7 types : String, Number, Boolean, null, undefined, Symbol(it makes a unique), BigInt.


//in a javascript type is not define. 

const score = 100;//Number type
const scoreValue = 100.3

const isLoggedIn = false //Boolean type
const outsideTemp = null //(its typeOf is Object) it is completly empty.
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')//its typeOf is the Symbol.

console.log(id === anotherId);// it return false.(we take values same but return value is not same.)

const bigNumber = 7846803975973393n //(its typeOf is bigint)//(after apply n in the last the number become bigNumber)

//Reference Type(Non-Primitive)- in a memory its reference is directly allocated.
//Array, Objects(me excellent karna hai) and browser web events make a excellent level, Function.

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//Undefined	:"undefined"
//Null	:"object"
//Boolean :	"boolean"
//Number :	"number"
//String :	"string"
//Object (native and does not implement [[Call]]):"object"
//Object (native or host and does implement [[Call]]) :	"function"
//Object (host and does not implement [[Call]])	: Implementation-defined except may not be "undefined", "boolean", "number", or "string".





