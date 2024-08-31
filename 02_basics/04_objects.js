//const tinderuser = new Object()//Empty object// it is a singleton object.

const tinderUser = {}// it is non-singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);// it return the empty object {}

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sanskar",
            lastname: "Mishra"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);// access user data method

const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "a", 4:"b"}
//const obj3 = {obj1, obj2}
//console.log(obj3);
// object ke andar object hai.

//const obj3 = Object.assign({},obj1, obj2)//empty string is given as a parameter that is an optional parameter (jo bhi value hai combine ho jayae gi and return me result is same as mention below.)
//console.log(obj3);//it return this { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}//using spread operator.
//console.log(obj3)//it return { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "S@gmai.com"
    },
    {

    },
    {

    },
    {

    },
]
users[1].email

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));// find all the keys.[ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(tinderUser));//find all values.[ '123abc', 'Sammy', false ]

//console.log(Object.entries(tinderUser));// it make each key value in a array.[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true //it return Boolean value.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sanskar"
}

//course.courseInstructor//it is write but we add some syntatical sugar. 
// here some syntatical sugar.
const {courseInstructor: instructor} = course// destructure the object.using curley bracket.
console.log(instructor);

// const navbar = () => {
    //in react (props.company) it is replace through ({company})//that is the concept of object destructure.
// }

//navbar(company = "Sanskar")

//API - backend se kuch values aati hai aap unko kaisae likhatae hai ..pahlae values aati thi xml se lakin aab values aati hasi JSON se.

{
    //This is JSON
}
// {
//     "name":"Sanskar"'
//     "coursename":"js in hindi",
//     "Price":"free"

// }

// in many times API are in array format.

[
    {},
    {},
    {}
]

//object  JSON format me hi bheja jata hai 


