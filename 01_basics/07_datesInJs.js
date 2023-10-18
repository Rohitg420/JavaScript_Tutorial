// Date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let createdMyDate = new Date(2023 , 09 , 03)  // month include with 0 to 11
//console.log(createdMyDate.toDateString());  // show day month year

//let createdMyDate = new Date(2023 , 09 , 03 , 2 , 30 )
let createdMyDate = new Date("2023-09-02")
// console.log(createdMyDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createdMyDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1);

// `${newDate.getDate()} and the time `

newDate.toLocaleString(`default`,{
    weekday: "long",
    
})