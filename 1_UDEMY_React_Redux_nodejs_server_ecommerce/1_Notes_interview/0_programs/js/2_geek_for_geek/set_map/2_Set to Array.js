//How to convert Set to Array in JavaScript ?

// Creating array from input string
const mySet = new Set([1, 1, 2, 3, 4, 4, 5, 6, 5]);
console.log("Elements in the set are: ", mySet);
let myArr = Array.from(mySet);

// Display output
console.log("Elements in the Array created using Set are: ", myArr);
