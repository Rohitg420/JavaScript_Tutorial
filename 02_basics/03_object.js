// singleton 
// object.create // through constructor 

// object literals 

const mySym = Symbol("key1")

const jsUser = {
    name: "Rohit",
    "full name": "Rohit Patel",
    age: 22,
    [mySym]: "myKey",
    email: "rohit@google.com",
    location: "Varanasi",
    loggedIn: false,
    lastLoggedInDays:["monday","saturday"],
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);  // used as a symbol

jsUser.email = "rohit@microsoft.com"
// Object.freeze(jsUser)
jsUser.email = "rohit@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello js User");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());