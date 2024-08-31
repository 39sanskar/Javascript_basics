const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" ,"flash" , "batman"]

//marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//const allHeros =  marvel_heros.concat(dc_heros);// basically concat operation it return the new array.
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator -spread all element using ... , ... ,...
//console.log(all_new_heros);

const another_array = [1, 2, 3 , [4, 5 ,6] , 7 , [6, 7, [4 , 5]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

//console.log(Array.isArray("Hitesh")); // it return false
//console.log(Array.from("Hitesh")); // it make a array.

console.log(Array.from({name : "hitesh"}));// interesting case for interview it return empty Array[].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// it return [100, 200, 300]




