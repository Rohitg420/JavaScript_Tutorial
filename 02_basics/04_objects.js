// const tinderUser = new Object() // singleton object
const tinderUser ={}  // non-singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Rohit"
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "rohit@google.com",
    fullName: {
        userFullName: {
            firstName: "Rohit",
            lastName: "Patel"
        }

    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"} 

// const obj4 = {obj1,obj2} // value assign in object in object
// const obj4 = Object.assign({},obj1,obj2,obj3) // value assign target to source 
const obj4 = {...obj1, ...obj2, ...obj3}  // spread operator
// console.log(obj4);


const user =[
    {
        id: 1,
        email: "Rohit@google.com",
    } ,
    {
        id: 1,
        email: "Rohit@google.com",
    },
    {
        id: 1,
        email: "Rohit@google.com",
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // find all keys
// console.log(Object.values(tinderUser)); // final all values
// console.log(Object.entries(tinderUser)); // find array key values converted arrays


console.log(tinderUser.hasOwnProperty('loggedIn')); // result in boolean 


const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh",
}
