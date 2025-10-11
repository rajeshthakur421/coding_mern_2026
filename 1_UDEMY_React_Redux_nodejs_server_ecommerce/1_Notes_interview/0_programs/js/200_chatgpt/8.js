//Minimize the maximum difference between the heights.

function minimizeMaxDifference(arr, k) {
    if (arr.length < k) {
        return -1; // If k is larger than the array length, return an error value
    }

    // Sort the array
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;

    // Find the minimum difference in any subarray of length k
    for (let i = 0; i <= arr.length - k; i++) {
        const currentDiff = arr[i + k - 1] - arr[i];
        minDiff = Math.min(minDiff, currentDiff);
    }

    return minDiff;
}

// Example usage:
const heights = [1, 5, 8, 10, 12, 15];
const k = 3;
console.log("The minimum maximum difference is:", minimizeMaxDifference(heights, k)); // Output: 3
