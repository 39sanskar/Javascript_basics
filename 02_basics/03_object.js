// singleton 
/*
✅ Correct Statements:
-If we declare an object using a literal, it is just one object — but it does not enforce singleton. Writing the literal again creates a new object.
-If we declare using a constructor (or class) with proper logic to store and return the same instance, then a singleton is formed. Otherwise, constructors by default create new objects each time.
👉 In short:

-Literal = one object, but not enforced singleton.
-Constructor/Class = can enforce singleton if coded properly.
*/


// object literals 

const mySym = Symbol("key1"); // Declaration of the symbol.

const JsUser = {
  name: "Sansakar",
  "full name": "SanskarMishra",   // their is no way to access it using .  like, console.log(JsUser.full name);
                                  // Only access using  console.log(JsUser["full name"]);
  age: 22,
  "fullName": "AmanMishra", 
  //mySym: "mykey1",    // it is not using as a Symbol 
  [mySym]: "mykey1",    // if you want to using as a Symbol then specially write in  [mySym]
  location: "jaipur",
  email: "sanskar@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// How to access values
// console.log(JsUser.email);  // sanskar@google.com
// console.log(JsUser[email]); // ReferenceError: email is not defined
// console.log(JsUser["email"]);  // sanskar@google.com

// console.log(JsUser.full name); // SyntaxError: missing ) after argument list
// console.log(JsUser["full name"]); // SanskarMishra (✅ interview)

// console.log(JsUser.fullName);  // AmanMishra
// console.log(JsUser["fullName"]); // AmanMishra


// console.log(JsUser.mySym);  // undefined
// console.log(typeof JsUser.mySym);  // undefined


// console.log(JsUser[mySym]) // mykey1    // Only using bracket [] to access symbol
// console.log(typeof JsUser[mySym]);  // string  (✅ interview)

JsUser.email = "sanskar@chatgpt.com"
// Object.freeze(JsUser); 
/*

Correct Behavior of Object.freeze()
-Object.freeze(obj) prevents adding, deleting, or changing properties of the object.
-It makes the object immutable at the top level (shallow freeze).
-If the object has nested objects, those can still be changed (unless you deep-freeze them manually).

*/ 
JsUser.email = "aman@mishramicrosoft.com"
// console.log(JsUser);


/*
Output: 

{
  name: 'Sansakar',
  'full name': 'SanskarMishra',
  age: 22,
  fullName: 'AmanMishra',
  location: 'jaipur',
  email: 'sanskar@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/


// function it is type-one citizen , you can treat as variables.

JsUser.greeting = function(){
  console.log("Hello JS user")
}
console.log(JsUser.greeting()); 
// Hello JS user
// undefined
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greetingTwo()); 
// Hello JS user, Sansakar
// undefined  => later we talk 
