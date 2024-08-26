// console.log(2 > 1);//true
// console.log(2 >= 1);//true
// console.log(2 < 1);//false
// console.log(2 == 1);//false
// console.log(2 != 1);//true

console.log("2" > 1);//true
console.log("02" > 1);//true
//Typescript is not allow to compare two different datatypes.


//Avoid these type of conversion.
console.log(null > 0);//false(null is empty.)
console.log(null == 0);//false
console.log(null >= 0);//true

// Note :The reason is that the equality check == and comparisons >, <, =, <=,work differently.Comparisions convert null to a number, treating it as 0.That's why null >= 0 is true and null > 0 is false.

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// Remember above undefined comparision.

//strict check ===
//strict check it checks the value and datatypes.

console.log("2" === 2);//false
//it return false because it has different datatypes.
