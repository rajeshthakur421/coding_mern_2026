//Remove Duplicate Elements from JavaScript Array

// Define the input array
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// Function to remove duplicate elements from an array
function removeDuplicates(arr) {
  // Initialize an empty array to store unique elements
  let unique = [];

  // Iterate over each element in the input array using forEach method
  arr.forEach((element) => {
    // Check if the current element is not already in the unique array
    if (!unique.includes(element)) {
      // If the element is not present, add it to the unique array
      unique.push(element);
    }
  });

  // Return the array containing unique elements
  return unique;
}

// Call the removeDuplicates function with the input array and log the result
console.log(removeDuplicates(arr));

