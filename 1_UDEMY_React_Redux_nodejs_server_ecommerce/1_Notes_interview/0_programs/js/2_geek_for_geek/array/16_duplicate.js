// Function to find duplicate elements in an array
let check_duplicate_in_array = (input_array) => {
  let duplicate_elements = []; // Step 1: Initialize an empty array for duplicate elements
  
  for (element of input_array) { // Step 2: Iterate through each element in the input array
    // Step 3: Check if the element appears more than once in the array
    if (input_array.indexOf(element) !== input_array.lastIndexOf(element)) {
      duplicate_elements.push(element); // Step 4: If duplicate, add it to duplicate_elements array
    }
  }
  
  // Step 5: Use Set to remove duplicate entries and return unique duplicate elements
  return [...new Set(duplicate_elements)];
};

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr)); // Output: [1, 2, 3]
