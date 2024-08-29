// string is denoted by both quotes single and double.
const name = "hitesh"
const repoCount = 50
//console.log(name + repoCount + " Value");
// this string method is outdated .

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this is good while we using in backend(also using $ symbol.)

const gameName = new String('hitesh-hc-com');

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//above line is just a syntax.

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
//charAt() is use to find  character.

console.log(gameName.indexOf('t'));
//indexOf() it is use to find index in which character.

const newString = gameName.substring(0 , 4)// start with 0 but not include 4. (last value is not execute.)and it ignore the negative value count from 0.
console.log(newString);

const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);
//in slice it also take negative value then it show result from the last position of the string.(if it take negative value then last value is -1 and count back .)

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());
//trim remove starting space and last space.

const url = "https://sanskar.com/sanskar%20mishra";
//browser is not understand about the space it automatically convert space into %20.

console.log(url.replace('%20', '_'));
// it replace %20 to _

console.log(url.includes('sundar'))
// it search 'sundar' is present or not.

console.log(gameName.split('-'));



