// array

const myArr = [0, 1, 2, 3, 4, 5]
//console.log(myArr[0]);
// first element intexing is 0.
// Javascript array-aopy-operation create shallow copies.(All standard built-in copy operations with any Javascript objects create shallow copies, rather than deep_copies).
//A shallow copy of an object is a copy whose properties share the same references.(if i want to change in array then thats change is also show in the original array.)
//A deep copy of an object is a copy whose properties do not share the same references. 

const myHeors = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1 , 2, 3, 4)
//console.log(myArr2[1]);

// Array methods
myArr.push(6)
myArr.push(7)
//console.log(myArr);
// push is simply add the element.

// pop - it is basically remove last element of the array.
myArr.pop() // it pop the last elemennt of the array.
//console.log(myArr);

myArr.unshift(0) // basically it add the element at a first place(it any number that is add at first place.) 
//console.log(myArr);

myArr.shift() // shift has no argument it is basically use pop like operation.
//console.log(myArr);

//console.log(myArr.includes(9));//false// it return the value which is boolean type.

//console.log(myArr.indexOf(3));// it return the index.
//console.log(myArr);


const newArr = myArr.join(); // basically join operationis is convert type of element in the String.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);// string

// slice , splice

console.log("A " , myArr);
const myn1 = myArr.slice(1 , 3);

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1 , 3);
console.log("C" , myArr);
console.log(myn2); //it return [1 , 2 , 3]
//basically ye original array se he element niklae ga (1 , 3) me 1 ans 3 both ko include karaega .


// splice - The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

