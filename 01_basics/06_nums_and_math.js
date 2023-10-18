 const score = 400
// console.log(score); 

 const balance = new Number(1000)
// console.log(balance);
 
// console.log(balance.toString()); // convert num to string 
// console.log(typeof(balance.toString())); // types of 
// console.log(balance.toString().length); // length
// console.log(balance.toFixed(2)); // precision value

 const otherNumber = 233.78687
// console.log(otherNumber.toPrecision(4)); // count num before decimal point 

   const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN')); // convert num into indian 



//+++++++++++++++++++++++++++++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-3)); // absolute value means change negative to positive 
// console.log(Math.round(4.6)); // it choose round off value 5 
// console.log(Math.ceil(4.3)); // it choose top value or highest value
//console.log(Math.round(4.9)); // it choose down or lowest value
// console.log(Math.min(3,4,5,6,));
// console.log(Math.max(3,4,5,6,));

console.log(Math.random()); // its always value 0 to 1
console.log((Math.random()*10 )+ 1);  
console.log(Math.floor(Math.random()*10 )+ 1); // +1 added for avoid 0

const min = 10 
const max = 20 

console.log(Math.floor(Math.random()*(max - min + 1)) + min);


