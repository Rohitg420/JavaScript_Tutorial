// Primitive datatype

// 7 type : String , Number , Boolean , Null , Undefined , symbol , BigInt 


const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outSideTemp = null 
let userEmail ;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // false (Either same string but different type return)
const bigNumber = 312564646456546n





// Reference (Non Primitive)

// Array , Objects , Functions 

const heros = ["Shaktimaan" , "JuniorG" , "Doga" , "Naagraaz" ]
let myObj = {
    name : "Rohit",
    age : 22,

}
const myFunction = function(){
    console.log("Helo World");
} 
console.log(typeof bigNumber); // bigInt
console.log(typeof scoreValue); // number 
console.log(typeof myFunction); // object Function




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive) // declair variable copy  
// Heap(Non Primitive) // reference orginial value

let myYoutubeName = "rohitpatel.com"
let anotherName = myYoutubeName
anotherName = "chai aur code"
// console.log(myYoutubeName);
// console.log(anotherName);
 
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "rohitpatel@google.com"
console.log(userTwo);
console.log(userOne);
console.log(userOne.email);
console.log(userTwo.email);