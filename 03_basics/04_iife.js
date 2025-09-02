// Immediately Invoked Function Expressions (IIFE)

// here two major reason to use iife (Interview)
// it is use in the database connection
// global scope pollution create some problem so, we use iife (Interview)

/*
function connection(){
  console.log(`DB CONNECTED`);
}
connection();

*/

/*


(function connection(){
  console.log(`DB CONNECTED`)
})()

// syntax  (write definition of the function)(execution of the function)


*/

/*

(function connection(){
  console.log(`DB CONNECTED`);  
})()

( () => {
  console.log(`DB CONNECTED TWO`)
})() 

// basically here iife function is invoked but this is not know about where stop the context.
// so, in this type of situation in the javascript end the line and using semi-colon ;

*/

/*

(function connection(){
  console.log(`DB CONNECTED THREE`)
})();  // when first function end then use semi-colon

(() => {
  console.log(`DB CONNECTED FOUR`)
})()


*/


(function connection(){  // this is named iffe(because it has name that is connection())
  console.log(`DB CONNECTED THREE`)
})();  // when first function end then use semi-colon

(() => { // this is un-named iife
  console.log(`DB CONNECTED FOUR`)
})();

((name)=> {
  console.log(`DB CONNECTED to ${name}`)
})("sanskar")
