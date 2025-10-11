//Find the Largest sum contiguous Subarray

function findMaxSumSubarray(arr) {
    // Initialize the overall maximum sum as the first element
    let overallMax = arr[0];
    // Initialize the current subarray sum as the first element
    let currentMax = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Update the current subarray sum. Either start a new subarray at the current element
        // or continue the existing subarray to include the current element
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        
        // Update the overall maximum sum found so far
        overallMax = Math.max(overallMax, currentMax);
    }

    // Return the overall maximum sum of the contiguous subarray
    return overallMax;
}

// Example usage:
const arr = [1, -2, 3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSumSubarray(arr));  // Output: 10
