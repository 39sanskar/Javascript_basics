/*

const tinderUser = new Object();  //  this is a singleton object 
console.log(tinderUser);  // {}

*/

/*

const tinderUser = {}; //  this is a non-singlton object
console.log(tinderUser);  // {}

*/


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  //  { id: '123abc', name: 'Aman', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullnmae: {
      firstname: "Sanskar",
      lastname: "Mishra"
    }
  }
}
// console.log(regularUser.fullname)  // { userfullnmae: { firstname: 'Sanskar', lastname: 'Mishra' } }
// console.log(regularUser.fullname.userfullnmae) // { firstname: 'Sanskar', lastname: 'Mishra' }
// console.log(regularUser.fullname.userfullnmae.firstname)  // Sanskar

// if response is come from API then, use ?
// console.log(regularUser.fullname?.userfullnmae.firstname);  // Sanskar


// Combination of the object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }

/*

const obj3 = Object.assign(obj1, obj2);
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(obj3);  //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

*/

const obj4 = Object.assign({}, obj1, obj2)  // optional parameter that is {}, not necessary to provide but good to provide
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj5 = {1: "a", 2: "b"}
const obj6 = {3: "a", 4: "b"}
const obj7 = {5: "a", 6: "b"}

const obj8 = Object.assign({}, obj5, obj6, obj7)   // here {} empty object is the target, and obj5, obj6, obj7 is the source
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(obj8);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// Using spread operator
const obj9 = {...obj5, ...obj6, ...obj7 }
console.log(obj9); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Values come from database (Array of the Object)
const users = [
  {
    id: 1,
    email: "h@gmail.com"
  },
  {
    id: 2,
    email: "g@gmail.com"
  },
  {
    id: 3,
    email: "i@gmail.com"
  },
]

users[1].email
console.log(users[1].email); // g@gmail.com
console.log(tinderUser)
console.log(Object.keys(tinderUser));   // basically i want to run a Object.keys method in the tinderUser Object  and the datatype of the output value is Array   [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));  // [ '123abc', 'Aman', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Aman' ], [ 'isLoggedIn', false ] ]


// If you want to check particular property is exist or not (result is return in the boolean manner.)
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true 
console.log(tinderUser.hasOwnProperty("isLogged"));  // false



//******************************* Destructuring ************************

const course = {
  coursename: "web-development",
  price: "999",
  courseInstructor: "Aman"
}
// console.log(course.courseInstructor);  // Aman,  basically access the value of the courseInstructor.

const {courseInstructor} = course   // syntatical sugar, basically access the value of the courseInstructor(another-way).
console.log(courseInstructor);  // Aman


const {courseInstructor: instructor} = course   // basically you write some short name like {courseInstructor: instructor} and then access 
console.log(instructor);  // Aman

/*
// Using in the react

const navbar = ({company}) => {  // concept of the destructuring using in the react

}

navbar(company = 'Sanskar')

*/


// **************************** API *****************************
// JSON
// {
//   "name": "Sanskar",
//   "coursename": "full-stack-development",
//   "price": "free"
// }

/*
// JSON format (Javascript object Notation)

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Nalan",
        "last": "Tunçeri"
      },
      "location": {
        "street": {
          "number": 5182,
          "name": "Kushimoto Sk"
        },
        "city": "Kars",
        "state": "Edirne",
        "country": "Turkey",
        "postcode": 28472,
        "coordinates": {
          "latitude": "66.2873",
          "longitude": "53.4476"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "nalan.tunceri@example.com",
      "login": {
        "uuid": "bcf18374-37b2-46b8-bb39-419ce6418645",
        "username": "purpleelephant172",
        "password": "catwoman",
        "salt": "ERixTGDQ",
        "md5": "aa559725ceacffa5eaa05ac0b951b018",
        "sha1": "1b38c29aa17df3b1ec6c7ee924bcd838d7a8a08b",
        "sha256": "fede49a2da294c50da23901618274c1bdf4305db7ec6f5d6adff8effa36de8b2"
      },
      "dob": {
        "date": "1977-02-11T14:22:18.796Z",
        "age": 46
      },
      "registered": {
        "date": "2017-09-06T10:08:03.064Z",
        "age": 5
      },
      "phone": "(321)-542-3575",
      "cell": "(063)-492-9707",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
      },
      "nat": "TR"
    }
  ],
  "info": {
    "seed": "c2f2b9ea70089b8b",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

*/