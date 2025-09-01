
// {} curley-bracket comes with function or if-else block then it ios known as the scope.

if (true){
  let a = 10
  const b = 20
  var c = 30  // Problem
}
// console.log(a)
// console.log(b)
// console.log(c)

/*
1. Inside the block (if (true) { ... })

-let a = 10 → let has block scope, so a exists only inside the { ... }.
-const b = 20 → const also has block scope, so b exists only inside the { ... }.
-var c = 30 → var has function scope (or global scope if not inside a function), so c is accessible outside the { ... }.

2. Outside the block

-console.log(a) → ❌ ReferenceError because a is not defined outside the block.
-console.log(b) → ❌ ReferenceError because b is not defined outside the block.
-console.log(c) → ✅ Works, prints 30, because var is not limited to block scope.

👉 In short:
-let & const → block-scoped.
-var → function-scoped (ignores blocks).

*/


let a = 300 // global scope 
if (true){
  let a = 10
  const b = 20
  console.log("INNER: ", a) // INNER:  10
}
console.log(a);  // 300 

/*
1. Global Scope
-Variables declared outside of any function or block are in the global scope.
-They can be accessed from anywhere in your program.
-In browsers, global variables declared with var become a property of the window object.


2. Local Scope
-Variables declared inside a function or block { ... } exist only there.
-They cannot be accessed outside of that function/block.

*/


// nested scope

function one(){
  const username = "sanskar"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);  // website is access only inside of the block

  two()
}
one()


if (true) {
  const username = "aman"
  if (username === "aman"){
    const website = " youtube"
    console.log(username + website);
  }
  // console.log(website); // website is not access bec it is outside of the scope.
}

// console.log(username) // username is not access bec it is outside of the scope.


// +++++++++++++++++++++++++ interesting +++++++++++++++



console.log(addone(5)); // 6 
function addone(num){
  return num + 1
}


addTwo()  // ReferenceError: Cannot access 'addTwo' before initialization (bec it is store in the variable, please refer Hosting)
const addTwo = function(num){
  return num + 2
}



