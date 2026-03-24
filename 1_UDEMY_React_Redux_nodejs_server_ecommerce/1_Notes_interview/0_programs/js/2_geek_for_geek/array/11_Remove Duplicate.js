//Remove Duplicate Elements from JavaScript Array
// Define the array with duplicate elements
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// Function to remove duplicate elements from an array
function removeDuplicates(arr) {
  let unique = []; // Step 1: Initialize an empty array to store unique elements

  // Step 2: Iterate over each element in the input array using forEach
  arr.forEach((element) => {
    // Step 3: Check if the element is not already in the unique array
    if (!unique.includes(element)) {
      unique.push(element); // Step 4: If not, add it to the unique array
    }
  });

  return unique; // Step 5: Return the array containing only unique elements
}

console.log(removeDuplicates(arr)); // Output: ['apple', 'mango', 'orange']
