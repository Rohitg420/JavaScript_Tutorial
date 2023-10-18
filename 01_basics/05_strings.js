// const name = "Rohit"
// const repoCount = 10
// // console.log(name + repoCount + " Value"); // not recomnded ,outdated 
 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('Rohit-rp-rs')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3)); // position of
// console.log(gameName.indexOf('t')); // position

// const newString = gameName.substring(1,4) // count starting 4 char 
// console.log(newString);

const anotherString = gameName.slice(0,-4)
console.log(anotherString);

const newStringOne = "  Rohit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rohit.com/rohit%20patel"

console.log(url.replace('%20','-'));

console.log(url.includes('rohit'));

console.log(gameName.split('-'));