//iife(interesting concept) - Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})(); //when adding extra parenthesis then it become a block 

//()()// first parenthesis , write the function definition.second parenthesis it is the execution of the iife function 

//in many times there are pollution in the global scope and removing there pollution thats why i am using iffe.

// that is the fun fact about the iffe function is you add the semicolom in the end of the iffe function;
(() => {
    console.log(`DB CONNECTED TWO`)
})();

((name)=> {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Sanskar');// name as a argument here .

// when write two iife in the file must be remember the semicolum ;

