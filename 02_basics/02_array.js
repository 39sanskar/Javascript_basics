const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

/*

// marvel_heros.push(dc_heros);

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  here both array are not merging, they create array inside array.
// console.log(marvel_heros[3][1]);  // flash 

*/

// const myHeros = marvel_heros.concat(dc_heros);
// console.log(myHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
/*
Combines two or more arrays. This method returns a new array without modifying any existing arrays.

@param items — Additional arrays and/or items to add to the end of the array.
*/


// Using spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity)
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// Data-Scraping (Interview)

console.log(Array.isArray("Sanskar"));  // false
console.log(Array.from("Sanskar"));  // [ 'S', 'a', 'n', 's', 'k', 'a', 'r' ]
console.log(Array.from({name: "Sanskar"})) // []  it gives you an empty array. (Interview)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] //Returns a new array from a set of elements.
