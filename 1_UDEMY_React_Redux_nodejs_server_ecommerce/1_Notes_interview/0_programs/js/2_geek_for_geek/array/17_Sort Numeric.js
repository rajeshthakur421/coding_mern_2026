//How to Sort Numeric Array using JavaScript ?
// Function to perform bubble sort on an array
function bubbleSort(arr) {
  let n = arr.length; // Step 1: Get the length of the array
  for (let i = 0; i < n - 1; i++) { // Step 2: Outer loop for passes
    for (let j = 0; j < n - 1 - i; j++) { // Step 3: Inner loop for comparisons
      if (arr[j] > arr[j + 1]) { // Step 4: Compare adjacent elements
        // Step 5: Swap arr[j] and arr[j + 1]
        let temp = arr[j]; // Temporary variable to hold arr[j]
        arr[j] = arr[j + 1]; // Assign arr[j + 1] to arr[j]
        arr[j + 1] = temp; // Assign temp (original arr[j]) to arr[j + 1]
      }
    }
  }
  return arr; // Step 6: Return the sorted array
}

// Example usage
let numbers = [4, 2, 5, 1, 3];
console.log(bubbleSort(numbers)); // Output: [1, 2, 3, 4, 5]

