//Function - some code are packed in a package and use its copy.

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName();
//sayMyName// This is a function reference 
//sayMyName()//This is function execution.

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
//addTwoNumbers(3 , "4");//string is return.
// if both arguments datatype is number then add it.

//when you make a function definition then it is (number1, number2) known as the parameters of the function.
//when calling the function then it is arguments.
// console means it print inside the console but return is the another concept 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);// it return 8
// }
//const result = addTwoNumbers(3, 5)
//console.log("Result:", result);// Result: undefined

function addTwoNumbers(number1 , number2){

    let result = number1 + number2
    return result
    //console.log("sanskar");// it will not be execute. because of that in a function their is a propety after the return statement the function not execute any statement/console.log(). 
}
const result = addTwoNumbers(3 , 5)

//console.log("Result:", result);//Result: 8

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("hitesh"));// it print hitesh just logged in 
//console.log(loginUserMessage());// it print undefined just logged in

//empty string ("") and undefined act as a false value in the if-else condition.

// (username === undefined) is equivalent to !username.


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//for default value (username = "sam") // value of this username is never be undefined its value minimum to minimum "sam" and if passed some value like "hitesh" that is overwrite.
//console.log(loginUserMessage("hitesh"))


// this is use in bild a shopping card.

function calculateCartPrice(...num1){
    return num1
}
// ... it is known as the both spread and rest. that is depend on the how to use it.

//console.log(calculateCartPrice(200, 400, 500, 2000));//it print the array [200, 400, 500, 2000]


function calculateCartPrice(val1, val2, ...num1){
     return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))
// val1->200; val2->400
// remaining 500 and 2000 are form a array [500, 2000]


const user = {
    username: "Sanskar",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

// using Array
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getarray){
    return getarray[1]//myNewArray is the generic name . jo value parameter me hai usko hi return karna hai.
}
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));//direct pass value 

