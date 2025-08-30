// String is denoted by single and double quotes.

const name = "Sanskar"

const repoCount = 50

// console.log(name + repoCount);  // outdated

// using bacticks(``) stringinterpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // here also implement method also ${name.Toupper}


// declaration of String

const gameName = new String('sanskarsm'); // keyValue -pair 

console.log(gameName);  // [String: 'hiteshhc']
console.log(gameName[0]); // s

console.log(gameName.__proto__) // {}

console.log(gameName.length); // 9

console.log(gameName.toUpperCase()); // SANSKARSM

console.log(gameName.charAt(2)); // n  (find character using index)
console.log(gameName.indexOf('k')) // 4  (find index using character)


const username = new String('hitesh-hc') ;

const newString = username.substring(0, 4); // 0 is including and 4 is excluding (in the substring -ve value is not considered if you provide -ive value then it will start from 0)
console.log(newString); // hite 


const anotherString = username.slice(0, 4); // if you privide -ive value then it start from reverse.
console.log(anotherString); // hite

const amanString = username.slice(-1, 4);
console.log(amanString); // ite 


/*
const username = new String('hitesh-hc');
const amanString = username.slice(-8, 4);
console.log(amanString); // ?

Step 1: String details
"hitesh-hc" has length 9.
Indexing:

0:h   1:i   2:t   3:e   4:s   5:h   6:-   7:h   8:c

Step 2: slice(-8, 4)
start = -8 → means length + (-8) = 9 - 8 = 1.
So effectively start = 1.
end = 4.

Step 3: Extract
Take characters from index 1 up to (but not including) 4:
index 1 → i
index 2 → t
index 3 → e
Result = "ite" 

*/

const newStringOne = "       sanskar       " // using trim to remove extra space
console.log(newStringOne.trim()); // sanskar

/*
trim() => A new string representing str stripped of whitespace from both its beginning and end 
Whitespace is defined as white-space character plus line terminator(new line.)
*/

const url = "https://sanskar.com/sanskar%20mishra"; // basically browser is not understand about the space it automatically convert space into  %20 eg...    "https://sanskar.com/sanskar mishra"   => "https://sanskar.com/sanskar%20mishra"

console.log(url.replace('%20', '-')) //  https://sanskar.com/sanskar-mishra

console.log(url.includes('sanskar'));  // true  // (url.includes("") => it checks particular string which is present in the url or not.)


console.log(username.split('-')); // [ 'hitesh', 'hc' ] bases on dash 

// Practice String Methods and follow backticks 