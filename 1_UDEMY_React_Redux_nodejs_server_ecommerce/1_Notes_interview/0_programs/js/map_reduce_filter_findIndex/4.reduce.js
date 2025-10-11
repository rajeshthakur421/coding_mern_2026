// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use reduce() to compute the sum of elements in the array
const sum = numbers.reduce((accumulator, currentValue, index) => {
  // Callback function parameters:
  // - accumulator: Accumulates the result of the operations
  // - currentValue: Current element being processed in the array
  // - index: Index of the current element in the array

  // Perform addition operation and return updated accumulator
  return accumulator + currentValue;
}, 0); // Initial value of accumulator is 0

// Log the original array
console.log('Original array:', numbers);

// Log the result computed by reduce()
console.log('Sum of array elements:', sum);


