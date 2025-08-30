/*
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
*/

// Dates 
let myDate = new Date()
//console.log(myDate);  // 2025-08-30T14:37:00.810Z

//console.log(myDate.toString());  // Sat Aug 30 2025 20:07:59 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); // 2025-08-30T14:43:15.247Z
// console.log(myDate.toJSON());  // 2025-08-30T14:43:15.247Z
// console.log(myDate.toDateString()); // Sat Aug 30 2025
// console.log(myDate.toTimeString());  // 20:13:15 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString()); // 8/30/2025
// console.log(myDate.toLocaleTimeString()); // 8:13:15 PM
// console.log(myDate.toLocaleString()); // 8/30/2025, 8:13:15 PM
// console.log(myDate.getTimezoneOffset()); // -330
// console.log(myDate.toUTCString()); // Sat, 30 Aug 2025 14:43:15 GMT

console.log(typeof myDate);  // object (👍 interview)


let myCreatedDate = new Date(2023, 0, 23) // (when you write in single digit then it start from 0)
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023  (in the javascript months are start from 0)

let createdDate = new Date(2023, 0, 23, 5, 3)
console.log(createdDate.toLocaleString()); // 1/23/2023, 5:03:00 AM


let importantDate = new Date("2023-01-14") // (in the format YY-MM-DD here specially month is start from 1)
console.log(importantDate.toLocaleString()); // 1/14/2023, 5:30:00 AM 


let indianDate = new Date("01-14-2023") // indian format (MM-DD-YY format)
console.log(indianDate.toLocaleString()); // 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1756566541294

/*

-Step 1: Date.now()
Date.now() returns the number of milliseconds that have passed since the Unix Epoch:
January 1, 1970 00:00:00 UTC
Example output:
1756566541294

-Step 2: Assigning to myTimeStamp
That large integer (milliseconds since 1970) is stored in myTimeStamp.

-Step 3: Logging
console.log(myTimeStamp) just prints that number.

-✅ So Date.now() is often used for:
-Timestamps (record when something happened).
-Measuring performance (difference between two timestamps).
-Creating unique IDs (when combined with other values).

⚡ Example: Measuring execution time
let start = Date.now();

// some code
for (let i = 0; i < 1e6; i++) {}

let end = Date.now();
console.log("Execution time:", end - start, "ms");

// Do you want me to also show you how to convert that timestamp into a readable date like "2025-08-30 18:42:00"?

*/



// console.log(myCreatedDate.getTime()); // 1674412200000 // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

// console.log(Math.floor(Date.now()/1000)); // 1756566541  (when divide by thoushand it return the Second.)


let newDate = new Date()
console.log(newDate);  // 2025-08-30T15:17:00.544Z
console.log(newDate.getMonth() + 1);  // 8 (Month is start from 0, so addition 1)
console.log(newDate.getDay());   // 6


console.log(
  `${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
);  // 6 and the time is 20:55:25


/* 

let newDate = new Date();

const pad = (n) => n.toString().padStart(2, "0");

console.log(
  `${newDate.getDay()} and the time is ${pad(newDate.getHours())}:${pad(newDate.getMinutes())}:${pad(newDate.getSeconds())}`
); 

-1. Create a Date object
let newDate = new Date();
-This creates a new Date object representing the current date and time.

-2. Helper function for padding
const pad = (n) => n.toString().padStart(2, "0");
n.toString() → converts the number into a string.
.padStart(2, "0") → ensures the string is at least 2 characters long, padding with "0" if necessary.
👉 Example:
pad(5) → "05"
pad(12) → "12"
This is used to make the time look like 18:05:09 instead of 18:5:9.


3. Logging the output
console.log(
  `${newDate.getDay()} and the time is ${pad(newDate.getHours())}:${pad(newDate.getMinutes())}:${pad(newDate.getSeconds())}`
);

Breaking it down:
-newDate.getDay() → returns the day of the week (0–6)
0 = Sunday, 1 = Monday, …, 6 = Saturday.
-newDate.getHours() → current hour (0–23).
-newDate.getMinutes() → current minute (0–59).
-newDate.getSeconds() → current second (0–59).

Each of hours, minutes, seconds is passed through pad(...) to ensure 2 digits.
Example Output:
6 and the time is 18:07:09
(If today is Saturday, 6 = Saturday, and the time is 6:07:09 PM.)

-⚡ Important Note:
getDay() returns day of week (0–6), not the date of the month.
If you wanted the date of the month, use newDate.getDate().


*/


// Important

console.log(newDate.toLocaleString('default', {
  weekday: "long",
  
}));  // Saturday

