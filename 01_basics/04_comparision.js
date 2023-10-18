console.log(2 > 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 < 1);
console.log(2 != 1);

 
console.log("2" > 1);
console.log("02" > 1);
console.log(2 > "1");

console.log(null > 0);   // null converted empty
console.log(null == 0); //  null "" ""
console.log(null >= 0); // null converted in 0
 
console.log(undefined == 0); // false
console.log(undefined > 0); //false
console.log(undefined < 0);  // false


// === (check datatype)

console.log("2" === 2); // false