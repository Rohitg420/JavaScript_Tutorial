const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // include array into array(it consider second array as an element)
console.log(marvel_heros);
console.log(marvel_heros[3][2]);
const allHeros = marvel_heros.concat(dc_heros) // include all element in single array 
console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // preferred (spread method) 
// console.log(all_new_heros);

    
const another_array = [1,2,3,[4,5,6],7,[8,9]]
const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Rohit")); // true or false (is present or not )
console.log(Array.from("Rohit")); // convert string into array
console.log(Array.from({name: "Rohit"})); //(interesting) result empty not convert directly because we put keys or values into array 
 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // return new array from set of element
