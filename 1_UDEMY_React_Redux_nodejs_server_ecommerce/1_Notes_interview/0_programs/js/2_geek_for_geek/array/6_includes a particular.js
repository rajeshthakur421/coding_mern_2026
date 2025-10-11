//How to check whether an array includes a particular value or not in JavaScript
// Array of fruits
let fruits_arrays = [
  "mango",
  "banana",
  "apple",
  "pineapple",
  "pomegranate",
  "orange",
];

// Function to check if a value is present in the array and return its index
let valueChecker = (value) => {
  // Loop through the fruits_array
  for (let i = 0; i < fruits_array.length; i++) {
    let current_value = fruits_array[i]; // Get the current element in the array

    // Check if the current element matches the given value
    if (value === current_value) {
      return value + " is present at index: " + i; // Return a message with index if found
    }
  }

  // Return message if value is not found in the array
  return value + " is not included in this array..";
};

// Test cases
console.log(valueChecker("apple")); // Output: apple is present at index: 2
console.log(valueChecker("app")); // Output: app is not included in this array..
console.log(valueChecker("banana")); // Output: banana is present at index: 1

//using index
// Array of fruits
let fruits_array = [
  "mango",
  "banana",
  "apple",
  "pineapple",
  "pomegranate",
  "orange",
];

// Function to check if a value is present in the array and return its index
let checkValue = (value) => {
  // Check if the value exists in the array using indexOf
  if (fruits_array.indexOf(value) >= 0)
    return (
      value + " is present at index : " + fruits_array.indexOf(value)
    ); // Return message with index if found
  else return value + " is not present in this array"; // Return message if not found
};

// Test cases
console.log(checkValue("apple")); // Output: apple is present at index : 2
console.log(checkValue("app")); // Output: app is not present in this array
console.log(checkValue("mango")); // Output: mango is present at index : 0
