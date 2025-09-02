// if 

if (true){
  // inside scope code is execute

}

if (false){
  // inside scope code in not execute

}

const isUserloggedIn = true

if (isUserloggedIn){

}

//  =  assignment operator (it assign the value for a variable)
//  ==  (equality operator) check it is equal
//  !=  not equal operator
//  ===  (strict equal) it check equality as well as dataType


const temperature = 41

if (temperature === 41 ){
   console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}
console.log("Execute")

/*

const score = 200

if (score > 100) {
  let power = "fly"
  console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); // ReferenceError: power is not defined  // power is outside of the scope

*/


/*

// if using var insted of let then the particular variable is in global scope.
const score = 200

if (score > 100) {
  var power = "fly"
  console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);

*/


const balance = 1000

if (balance > 500) console.log("test"); // implict scope, execute in a single line you cant write multiple line.

/*

// using comma (this is im-mature code, dont do )  
const price = 500
if (price > 400) console.log("test"), console.log("test2");

*/
const userLoggedIn = true
const debitCard = true
const loggedInFormEmail = true
const loggedInFormGoogle = true

if (userLoggedIn && debitCard && 2==3) {
  console.log("Allow to buy course");
}

if (loggedInFormGoogle || loggedInFormEmail) { // multiple condition can check
  console.log("User logged in");
}

