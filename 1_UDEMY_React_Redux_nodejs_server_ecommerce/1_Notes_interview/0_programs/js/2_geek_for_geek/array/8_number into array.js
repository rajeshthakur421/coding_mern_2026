//How to convert a number into array in JavaScript
const number = 12345;
const array = [];
const numStr = String(number);//convert in string

for (let i = 0; i < numStr.length; i++) {
  array.push(Number(numStr[i]));//convert number one by one
}

console.log(array);
