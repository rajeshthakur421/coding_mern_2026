// Function to insert an element at a specific index in an array
function insertElement() {
  // Define the initial array
  let arr = [1, 2, 3, 4, 5];
  
  // Define the index where the new element will be inserted
  let index = 2;
  
  // Define the new element to be inserted
  let element = -99;

  // Shift all elements one place to the back starting from the end of the array until reaching the specified index
  for (let i = arr.length; i > index; i--) {
    // Move the element at the current position to the next position
    arr[i] = arr[i - 1];
  }

  // Insert the new element at the specified index
  arr[index] = element;

  // Output the modified array
  console.log(arr);
}

// Call the function to insert the element
insertElement();
