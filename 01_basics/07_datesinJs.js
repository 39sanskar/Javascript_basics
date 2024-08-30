//Dates{it is an object.}

let myDate = new Date()
console.log(myDate.toString());// it return Fri Aug 30 2024 17:53:31 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());// it return Fri Aug 30 2024

console.log(myDate.toISOString());// it return 2024-08-30T17:53:31.252Z

console.log(myDate.toJSON());//2024-08-30T17:53:31.252Z

console.log(myDate.toLocaleDateString());//8/30/2024

console.log(myDate.toLocaleString());// 8/30/2024, 5:53:31 PM

console.log(myDate.toLocaleTimeString());//5:53:31 PM

console.log(myDate.toTimeString());//17:53:31 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString());//Fri, 30 Aug 2024 17:53:31 GMT

console.log(typeof myDate); // object.

//let myCreatedDate = new Date(2023, 0 , 23)
//console.log(myCreatedDate.toDateString());// Actually in javascript monts start from 0

//let myCreatedDate = new Date(2023, 0 , 23 ,5 , 3)
//console.log(myCreatedDate.toLocaleString());// 1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());// if you write in yy-mm-dd format then months start from 01 

let myTimeStamp = Date.now()
console.log(myTimeStamp);// it returns the millisecond (1725041967332) from 1st january 1970.

console.log(myCreatedDate.getTime());

//console.log(Date.now()/1000); // it return second (it may or may not be decimal)

//console.log(Math.floor(Date.now()/1000)); // it consume the decimal value.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // in a javscript months is start from  0.

console.log(newDate.getDate());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default' , { 
    weekday: "long"
})



