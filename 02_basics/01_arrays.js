// Arrays

const myArr = [0,1,2,3,4,5,6,7,8,]
//console.log(myArr[1]);

// Array methods 

// myArr.push(5) // add new element in last 
// myArr.push(3)
// myArr.pop()  // remove last element

// myArr.unshift(9) // shift all the value by adding this num in first element
// myArr.shift() // remove the first value

// console.log(myArr.includes(9)); // results in true or false(boolean)
// console.log(myArr.indexOf(3));  // position of value 

// const newArr = myArr.join() // bind and change into string 
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);


// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 5) // first range include and second range not include 
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1, 5) // remove the slice portion in array element 
console.log("C", myArr);
console.log(myn2);
