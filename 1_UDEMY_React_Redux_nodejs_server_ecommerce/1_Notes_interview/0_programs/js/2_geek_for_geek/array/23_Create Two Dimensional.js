//JavaScript Program to Create Two Dimensional Array

// Define a function 'create2DArray' that takes two parameters: number of rows and number of columns
function create2DArray(rows, cols) {
  let arr = [];  // Initialize an empty array to hold the 2D array
  let counter = 0;  // Initialize a counter to track the value to be assigned to each element

  for (let i = 0; i < rows; i++) {  // Loop through each row index from 0 to rows - 1
    arr[i] = [];  // Initialize an empty array for the current row

    for (let j = 0; j < cols; j++) {  // Loop through each column index from 0 to cols - 1
      arr[i][j] = counter;  // Assign the current value of the counter to the current element
      counter++;  // Increment the counter for the next element
    }
  }
  return arr;  // Return the completed 2D array
}

let arr = create2DArray(3, 4);
console.log(arr);

// Function to display the 2D array in a readable format
function display2DArray(array) {
  for (let row of array) {
    console.log(row.join(' '));  // Join the elements of each row with a space and print it
  }
}

display2DArray(arr);
