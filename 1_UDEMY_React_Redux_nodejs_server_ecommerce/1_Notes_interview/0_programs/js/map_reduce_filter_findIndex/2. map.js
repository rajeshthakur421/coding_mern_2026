// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use map() to create a new array with modified elements
const doubledNumbers = numbers.map((element, index) => {
  // Callback function parameters:
  // - element: Current element being processed in the array
  // - index: Index of the current element in the array

  // Perform operation on each element (e.g., double the value)
  return element * 2;
});

// Log the original array
console.log('Original array:', numbers);

// Log the new array created by map()
console.log('Doubled array:', doubledNumbers);
