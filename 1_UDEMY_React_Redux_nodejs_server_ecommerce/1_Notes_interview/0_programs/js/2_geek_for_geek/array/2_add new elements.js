// Function to add new elements at the beginning of an array
function addElementsAtBeginning(arr, elementsToAdd) {
  // Loop through the elementsToAdd array from the last element to the first
  for (let i = elementsToAdd.length - 1; i >= 0; i--) {
    // Use unshift to add each element to the beginning of the arr
    arr.unshift(elementsToAdd[i]);
    
    // Alternatively, you could use splice to add elements to the beginning
    // arr.splice(0, 0, elementsToAdd[i]);
  }
  // Return the modified array
  return arr;
}

// Example usage
let arr = [3, 4, 5]; // Initial array
let elementsToAdd = [1, 2]; // Elements to add at the beginning
arr = addElementsAtBeginning(arr, elementsToAdd); // Call the function and update arr
console.log(arr); // Output the modified array: [1, 2, 3, 4, 5]
