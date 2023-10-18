let score = "33aa"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33aa" => Nan (not a number)
// true => 1 false => 0
// null => 0
// undefined => Nan
 
let booleanLoggedIn = "Rohit"
console.log(booleanLoggedIn);

// 1 => true 0 => false
// "" => false 
// "Rohit" => true

let someNumber = 33
let stringNumber = String (someNumber) 
console.log(stringNumber);
console.log(typeof(stringNumber));
 
//*************************************** OPERATIONS ************************************* */

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2 to power 2
console.log(2/3);
console.log(2%3); // modulus

let str1 = "hello"
let str2 = " Rohit"
let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2);
console.log(2 + "1");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(true);  // true
console.log(+true); // 1
console.log(+"");   // 0

let counterScore = 100
//counterScore++; // 101
//++counterScore; // 101
console.log(counterScore);
