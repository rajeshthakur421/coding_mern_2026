//JavaScript Program to Clone an Object

// Original object
let originalObj = {
  name: "John",
  age: 30,
  city: "New York",
};

// Method 1: Using Object.assign()
let clonedObj1 = Object.assign({}, originalObj);

// Method 2: Using the spread operator (ES6)
let clonedObj2 = { ...originalObj };

// Method 3: Using JSON.parse() and JSON.stringify()
let clonedObj3 = JSON.parse(JSON.stringify(originalObj));

// Modify the cloned objects to demonstrate independence
clonedObj1.age = 25;
clonedObj2.city = "San Francisco";
clonedObj3.name = "Jane";

// Output the original object and cloned objects
console.log("Original Object:", originalObj);
console.log("Cloned Object 1:", clonedObj1);
console.log("Cloned Object 2:", clonedObj2);
console.log("Cloned Object 3:", clonedObj3);
