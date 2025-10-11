// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter() to create a new array with filtered elements
const evenNumbers = numbers.filter((element, index) => {
  // Callback function parameters:
  // - element: Current element being processed in the array
  // - index: Index of the current element in the array

  // Return true to keep the element in the filtered array, false otherwise
  return element % 2 === 0;
});

// Log the original array
console.log('Original array:', numbers);

// Log the new array created by filter()
console.log('Filtered array (even numbers):', evenNumbers);
