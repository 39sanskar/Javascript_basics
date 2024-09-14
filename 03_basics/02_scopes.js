// let a = 10
// const b = 20
// var c = 30

//{} curley bracket is a scope if come with function and if-else condition.
let a = 300// it is avilable for the program.
if(true){
  let a = 10
  const b = 20
  //var c = 30 (here var is not use.)
  //c = 30
  console.log("INNER: ", a);
  // ye declaraton sirf curley bracket ke andar hi kaam karae ga .outside nahi aana chaiyae.
  // global scope ki value scope ke andar avilable hoti hai but local scope ki value scope ke bahar nahi jani chaiyae.
}
// console.log(a);
// console.log(b);
//console.log(c);// it print 30 in the console but it is wrong because of that var c is declare inside the curley bracket.then not use var keyward.


//when we check scope in windows that scope is different. and when we check scope in code environment that is different.

//Nested scope

function one(){
  const username = "hitesh"
  function two(){
    const website = "youtube"
    console.log(username);//  it access username. it is in local scope.
  }

  //console.log(website); // it is not execute.because it call outside the scope.

  two()// function one () is big as compare to function two() 
}

one() // this is calling function one()

if(true){
  const username = "sanskar"
  if(username === "sanskar"){
    const website = " youtube"
    console.log(username +  website);
  }
  //console.log(website);// this is not access because it define inside the scope but calling outside the scope.
}
//console.log(username);// username ka scope yaha pe nahi hai.

// ++++++++++++interesting ++++++

function addone(num){
  return num + 1
}

addone(5)
//console.log(addone(5));

const addTwo = function(num){
  return num + 2
}
// const addTwo it is a type of function declaration and also known as expression. here function is declare but also hold in the variable.(remember)
addTwo(5)



console.log(addone(5))

function addone(num){
  return num + 1
}
// he access before declaration of the function.

addTwo(5)
const addTwo = function(num){
  return num + 2
}
// but in this case we cant access before declaration of the function because of that it hold value in the expression/ variable.


