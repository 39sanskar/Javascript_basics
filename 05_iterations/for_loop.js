// for 

for (let i = 0; i < 10; i++){
  const element = i;
  if (element == 5) {
    // console.log("5 is best number")
  }
  // console.log(element);
  // ( let i = 0 )and (const = element ), variables are created fresh inside the block and destroyed when the block ends.
}

// console.log(element);  // element is not access outside of the block-scope


for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  
  for (let j = 0; j < 10; j++){
    // console.log(`Inner loop value: ${j} and inner loop ${i}`);  
    // inside j variable you have to access i bec. you are inside of the block-scope  
  }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);  
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break  
//   }
//   console.log(`Value of i is ${index}`);  
// }

/*
🔹 break
Definition: The break statement immediately terminates the nearest loop (for, while, do...while, or switch statement) and transfers control to the statement right after the loop.
-Use case: When you want to stop the loop entirely as soon as a certain condition is met.
*/

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;  
  }
  console.log(`Value of i is ${index}`);
  
}

/*
🔹 continue
Definition: The continue statement skips the current iteration of the loop and jumps to the next iteration. The loop does not end, it just ignores the rest of the code for that iteration.
Use case: When you want to skip some values but keep the loop running.
*/
