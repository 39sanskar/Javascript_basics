//Declaration of object has two types - one is Literal and another one is constructor.
// singleton - koi bhi constructor se bamatae hai to singleton hi banta hai . ye aapnae tarah ka eak hi object hai .

// literals ki tarah declare kartae hai to singleton nahi banta hai.
//Object.create it is known as the constructor method 



//object literals

//declare a symbol.

const mySym = Symbol("key1")
const JsUser = {
    name: "Sanskar",
    "full name": "Sanskar Mishra",//their is no chance it is accessed by dot(.)

    //mySym: "myKey1",//this is not a proper way to declare a symbol.
    [mySym]: "mykey1",//this is the acctual syntax to declare the Symbol.
    age: 18,
    location: "Agra",
    email: "sanskar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// in object key and value both are define by user.(bydefault system is process name an a string "name")behind the seen name is act as a string.

//console.log(JsUser.email);//it is the simple method.
//console.log(JsUser["email"]);//it is squqre notation method.//behind the seen email is act as a string (basically it is a name).

//console.log(JsUser."full name");// it is not accessed by simple method.

//console.log(JsUser["full name"]);

//console.log(JsUser[mySym]);//interesting topic for interview .//this is a Syntax to declare my symbol.[mySym] 

JsUser.email = "sanskar@chatgpt.com"
//Object.freeze(JsUser)//it freeze the value change is not propagate.

JsUser.email = "Sanskar@microsoft.com"// here change is not propagate.
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
//console.log(JsUser.greeting);// it return [Function (anonyomus)]

//console.log(JsUser.greeting());// it return Hello JS user.

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    // .this method is use to access the property of the object.
}

console.log(JsUser.greeting());//Hello JS user

console.log(JsUser.greetingTwo());//Hello JS user


