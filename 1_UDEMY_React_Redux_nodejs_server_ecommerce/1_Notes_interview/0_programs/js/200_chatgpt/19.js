//Find if there is any subarray with sum equal to 0.

function hasZeroSumSubarray(arr) {
    const prefixSums = new Set();
    let currentSum = 0;

    for (const num of arr) {
        currentSum += num;

        // Check if the current prefix sum is zero or if it has been seen before
        if (currentSum === 0 || prefixSums.has(currentSum)) {
            return true;
        }

        // Add the current prefix sum to the set
        prefixSums.add(currentSum);
    }

    return false;
}

// Example usage:
const arr1 = [4, 2, -3, 1, 6];
const arr2 = [1, 2, 3, -4, 5];
console.log("Array 1 has zero sum subarray:", hasZeroSumSubarray(arr1)); // Output: true
console.log("Array 2 has zero sum subarray:", hasZeroSumSubarray(arr2)); // Output: false
