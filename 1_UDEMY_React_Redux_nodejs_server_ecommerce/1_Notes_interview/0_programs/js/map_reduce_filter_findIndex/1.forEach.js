1; //JavaScript Array forEach()

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use forEach() to iterate over each element in the array
numbers.forEach((element, index) => {
  // Callback function parameters:
  // - element: Current element being processed in the array
  // - index: Index of the current element in the array

  // Log each element to the console
  console.log(`Element at index ${index} is: ${element}`);

  // Perform operations on each element (e.g., modify, process)
  // Example: Double each element in the array
  numbers[index] = element * 2;
});

// Log the modified array after forEach() completes
console.log('Modified array:', numbers);

