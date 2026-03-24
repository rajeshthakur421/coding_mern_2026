//How to replace an item from an array in JavaScript

// Define the array
let arr = [1, 2, 3, 4, 5];

// Index of the item to replace
let index = 2;

// New value to replace at the specified index
let newValue = 10;

// Iterate over each item in the array using forEach
arr.forEach((item, i, array) => {
  // Check if the current index matches the index to be replaced
  if (i === index) {
    array[i] = newValue; // Replace the item at index i with newValue
  }
});

console.log(arr); // Output the modified array: [1, 2, 10, 4, 5]

