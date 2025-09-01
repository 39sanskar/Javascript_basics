// ******************* functions and Parameters **************

// console.log("A")
// console.log("M")
// console.log("A")
// console.log("N")

function sayMyName(){
  console.log("A")
  console.log("M")
  console.log("A")
  console.log("N")
}
// sayMyName();  // sayMyName it is reference of the function and sayMyname()  it is the execution of the function.


/*

function addTwoNumbers(number1, number2){
  console.log(number1 + number2)
}
addTwoNumbers(3, 4)  // 7
addTwoNumbers(3, "4")  // 34
addTwoNumbers(3, "a")  // 3a
addTwoNumbers(3, null) // 3

*/

/*
Parameter
-A parameter is a placeholder (variable) defined in the function’s declaration.
-It specifies what kind of input the function expects.
Think of it as a "label" for the data that will come in.


Argument
-An argument is the actual value you pass to a function when calling it.
-It replaces the parameter during execution.


Key Difference
-Parameter = variable in function definition.
-Argument = real value passed to function.
*/

/*

function addTwoNumbers(number1, number2){
  console.log(number1 + number2)
}

const result = addTwoNumbers(3, 5) // 8

console.log("Result: ", result) // Result:  undefined


*/


function addTwoNumbers(number1, number2){
  let result = number1 + number2
  return result 
  console.log("AMan") // after using return , then the function is nothing to do.
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)  // Result:  8


function loginUserMessage(username){
  if(username === undefined){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

loginUserMessage("Sanskar") // basically here function return something, but not print anything because  you are not using console.log()

// console.log(loginUserMessage("Sanskar")); // Sanskar just logged in

// console.log(loginUserMessage());  // undefined just logged in   // if value is not pass 

// in the Javascript undefined and ""(empty string) is considered as false.



function loginUserMessage(username = "sam"){
  if(!username){
    console.log("Please enter a username")
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage())   // if you nothing to pass then  it return  sam just logged in

// console.log(loginUserMessage("Aman")) // if you pass value then it will overwrite and return   Aman just logged in



//**************** function with object **********

/*
function calculateCartPrice(...num1){  // using rest operator 
  return num1
}
console.log(calculateCartPrice(200, 400, 500)) // [ 200, 400, 500 ]

*/

function calculateCartPrice(val1, val2, ...num1){  // using rest operator 
  return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)) // [ 500, 2000 ] , basically (val1 = 200, val2 = 400)


/*

const user = {
  username: "sanskar",
  price: 199  // must check types.
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) // here must pass a user 


*/

/*
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({ // here pass object 
  username: "sam",
  price: 399
})

*/


// passing a array
const myNewArray = [200, 400, 1000, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray)) //  400

console.log(returnSecondValue([200, 400, 1000, 600])) // 400
