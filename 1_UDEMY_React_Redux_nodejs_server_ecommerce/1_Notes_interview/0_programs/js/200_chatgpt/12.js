//Kadane’s Algorithm.

function kadaneAlgorithm(arr) {
    if (arr.length === 0) return 0; // Edge case: empty array

    let maxCurrent = arr[0]; // Maximum sum of the subarray ending at the current position
    let maxGlobal = arr[0]; // Maximum sum found so far

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Update maxCurrent to be the maximum of the current element itself
        // or the current element plus the maximum sum of the subarray ending at the previous position
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

        // Update maxGlobal if maxCurrent is greater
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }

    return maxGlobal;
}

// Example usage:
const arr = [2, -1, 3, 4, -2, 1, 5, -3];
console.log("The largest sum of contiguous subarray is:", kadaneAlgorithm(arr)); // Output: 12
