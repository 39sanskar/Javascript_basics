const user = {
    username: "sanskar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    //this keyword is use to refer current context.    
    //console.log(this);//basically it return the current context.
    }
}

//user.welcomeMessage()//this is a method 
//user.username = "sam"// here change the context that means change in the value.
//user.welcomeMessage()

//console.log(this);// it present in the node environment this refer the empty object {} 

// in previous time we execute javascript in only one way that it is in the chrome 

//after some time take out engine from the chrome and name as - node, deno, bash.
// when the javascript engine run in the window that has the global object is window object.


// function chai(){
//     let username = "Sanskar"
//     //console.log(this.username);// it show undefined. this works as a contest it not work in the function.
// }
// chai()



// const chai = function(){
//     let username = "Sanskar"
//     //console.log(this.username);// undefined
// }
// chai()


//++++++++ Arrow-Function ++++++

const chai = () => {//this is arrow function.
    let username ="Sanskar";
    console.log(this.username);//undefined.
}
//chai()

//Basics syntax is () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// } 

//This is a IMPLICIT return type.
//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) => (num1 + num2) // curley brackets me wrap kiya to return keyward likhana padaaega but parenrhesis me wrap iya to curley brackets nahi likhana padaega .// Also use in REACT.

// Explicit me return keyward use hota hai .


const addTwo = (num1,num2) => ({username: "Sanskar"}) // because of object must be wraap in the parenthesis.
// in object without using parenthesis it show undefined.
console.log(addTwo(3, 4))


//const myArray = [2, 5, 3, 7, 8]
//myArray.forEach()