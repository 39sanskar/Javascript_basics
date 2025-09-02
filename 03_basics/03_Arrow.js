const user = {
  username: "sanskar",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`);
    // when you want to refer a current context here it is present in inside of the curley brackets. then using the {this.username} keyword.
    console.log(this);  // this is tell us the current context
  }
}

// user.welcomeMessage() // sanskar , welcome to website
// user.username = "Sam" // here current context is change
// user.welcomeMessage() // Sam , welcome to website

// console.log(this) // {}


/*
// inside browser window is the global object.
🔹 this in Browser
Top-level: this === window
Function (non-strict): this === window
Function (strict): this === undefined
Object method: this === the object

🔹 this in Node.js
Top-level: this === {} (same as module.exports, not global)
Function (non-strict): this === global
Function (strict): this === undefined
Object method: this === the object

👉 Main Difference:
Browser top-level this → window
Node.js top-level this → {} (module scope)

*/


/*
function chai(){
  let username = "sanskar"
  console.log(this.username); // undefined
  // basically this work on the object, not in the function
}

chai()

*/

/*

const chai = function () {
  let username = "sanskar"
  console.log(this); // it will return something
  console.log(this.username); // undefined
}
chai()

*/

/*
// Using arrow function (Interview)

const chai = () => {
  let username = "aman"
  console.log(this) // {}
  console.log(this.username); // undefined
}
chai()

*/

/*
// basic arrow function

const addTwo = (num1, num2) => {
  return num1 + num2
}

console.log(addTwo(3, 5)); // 8

*/


/*
// implict return (curley-bracket is not using, return is also not using)

const addTwo = (num1, num2) => num1 + num2 
console.log(addTwo(3, 5)); // 8

*/

// Concept: if you use curley-beaces {} then must you have to write a return keyword and if parenthesis () is using then do not use return keyword.


const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4)) //  7


const userlogin = () => ({username: "aman"}) // must wrap inside parenthesis
console.log(userlogin()); // { username: 'aman' }


/*

-Yes ✅ a normal function in JavaScript uses this, but the value of this depends on how the function is called (not where it is defined).

🔹 Normal Function & this
-In Browser (non-strict mode)

function show() {
  console.log(this);
}
show(); 
// 👉 `this` = window


-In Browser (strict mode)

'use strict';
function show() {
  console.log(this);
}
show();
// 👉 `this` = undefined


-In Node.js (non-strict mode)

function show() {
  console.log(this);
}
show(); 
// 👉 `this` = global


-In Node.js (strict mode)

'use strict';
function show() {
  console.log(this);
}
show();
// 👉 `this` = undefined


-Inside an object (Browser & Node)
const obj = {
  name: "JS",
  show: function() {
    console.log(this);
  }
};
obj.show(); 
// 👉 `this` = obj

✅ Summary:
-A normal function does use this.
-The value of this depends on the call site (how the function is called).
-In strict mode, if not called on an object, this = undefined.
-In non-strict mode, if not called on an object:
-Browser → this = window
-Node.js → this = global
*/

/*

🔹 Arrow Functions & this
-Arrow functions do not have their own this.
-Instead, they inherit this from their surrounding lexical scope (the place where they are defined).
-So the value of this in an arrow function depends on where it was created, not how it is called.

Examples

1. Top-level arrow function
const show = () => {
  console.log(this);
};
show();

Browser → this = window (in non-strict mode) or global scope
Node.js → this = {} (module.exports, not global)


2. Inside an object
const obj = {
  name: "JS",
  show: () => {
    console.log(this);
  }
};
obj.show();

👉 this is not obj.
It inherits from the outer scope (global/module), so:
Browser → window
Node.js → {} (module scope)

*/