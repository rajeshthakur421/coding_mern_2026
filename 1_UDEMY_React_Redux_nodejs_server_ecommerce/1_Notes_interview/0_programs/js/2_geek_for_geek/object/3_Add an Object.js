//Add an Object to an Array in JavaScript

// Initial array of objects
let array = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

// New object to add
let newObject = { name: "Sam", age: 22 };

// 1. Using push() - Adds the object to the end of the array
array.push(newObject);
console.log("After push():", array);


// 2. Using unshift() - Adds the object to the beginning of the array
array.unshift(newObject);
console.log("After unshift():", array);

// 3. Using splice() - Inserts the object at a specific index (e.g., index 1)
array.splice(1, 0, newObject);
console.log("After splice():", array);

// 4. Using spread operator - Adds the object to the end of the array
array = [...array, newObject];
console.log("After spread (end):", array);

// Using spread operator - Adds the object to the beginning of the array
array = [newObject, ...array];
console.log("After spread (beginning):", array);
