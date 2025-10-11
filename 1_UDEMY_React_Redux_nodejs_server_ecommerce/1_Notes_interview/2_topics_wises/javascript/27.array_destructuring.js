/* unpack values from arrays,or properties from objects, into distinct variables.
easy, concise variable assignment and less code, Simplified Code
*/

0;//withour desctructuring 

const numbers = [1, 2, 3];
const first = numbers[0];
const second = numbers[1];

// With destructuring
const [first, second] = numbers;


1; //
const vehicles = ["mustang", "f-150", "expedition"];

const [car, , suv] = vehicles;

console.log(car)

2; //
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

console.log(add); //11
console.log(subtract); //3


3;//
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// destructuring assignment  
var [a,b,...args] = colors;  
console.log(a);   
console.log(b);   
console.log(args);  

4;//swap value
var x = 100, y = 200;  
[x, y] = [y, x];  
console.log(x); // 200  
console.log(y); // 100  

5;//nested destructuring
var numbers = [5, [2, 3, 4], 12, 14];
var  [a, [x, y, z]] = numbers;

console.log(x); // Output: 2
console.log(y); // Output: 3
console.log(z); // Output: 4
