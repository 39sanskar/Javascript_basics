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

// **********Memory*********
//Stack-Memory is used in the (Primitive-Datatypes) in this memory it return the copy of those who declare by you.
//Heap(Non-Primitive)in this memory it return the original value reference of the memory (jo bhi change karaege wo original value me change hoga.)

let myYoutubename = "SanskarMishradotcom"

let anothername = myYoutubename
anothername = "AmanMishradotcom"

console.log(myYoutubename);
console.log(anothername);
//in the myYoutubename actually not give the value but it gives its copy and then we do change in the copy that change only show in the copy. not in the acctual value change.(it use the Stack-Memory).

let userOne = {
    email: "user@google.com",
    upi: "suer@ybl"
}

let userTwo = userOne

userTwo.email = "Sanskar@email.com"
console.log(userOne.email);
console.log(userTwo.email);
//in the above example it refer the Heap-Memory.(it refer the original value and if do change then it change the original value.)




