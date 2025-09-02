const userEmail = []

// [] => considered as a truthy value
// "" => empty string is considered as a falsy 
// "s@sanskar.ai" => string is consodered as a truthy value

if (userEmail) {
  console.log("Got user email")
} else {
  console.log("Dont have user email")
}


// falsy values => false, 0, -0(Interview), bigInt 0n, "", null, undefined, NaN 

// truthy value => [], "0" (if inside string write 0 then it is truthy value). Anything inside string is considered as a truthy value,  "false",  {}, function()() 

// function(){} => empty function is considered as a truthy value


if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){ //here Object.keys(emptyObj) it will return an Array ,so using length to check array is empty or not.
  console.log("Object is empty");
}

/*
Console (using in the competative programming.)

false == 0
> true

false == ''
> true

0 == ''
> true

*/


// Nullish Coalesing Operator (??): null undefined
// Only check for two keyword null, undefined
// when you use database/firebase then directly response is not avilable , so it may be you get null or undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 9
val3 = undefined ?? 15

console.log(val1);  // 5
console.log(val2); 
console.log(val3);


val4 = null ?? 10 ?? 15  // here first value is assign
console.log(val4);

// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// Note:  Nullish Coalesing Operator (??) and  Terniary Operator both are different Operator
