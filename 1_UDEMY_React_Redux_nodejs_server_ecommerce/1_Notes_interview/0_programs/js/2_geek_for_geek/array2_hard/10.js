//Find if there is any subarray with a sum equal to zero

function hasZeroSumSubarray(arr) {
    const sumSet = new Set();
    let cumulativeSum = 0;

    for (const num of arr) {
        cumulativeSum += num;

        // Check if cumulative sum is zero or has been seen before
        if (cumulativeSum === 0 || sumSet.has(cumulativeSum)) {
            return true;
        }

        // Add the current cumulative sum to the set
        sumSet.add(cumulativeSum);
    }

    return false;
}

// Example usage:
const arr1 = [4, 2, -3, 1, 6];
console.log(hasZeroSumSubarray(arr1));  // Output: true

const arr2 = [1, 2, 3, -4, 5];
console.log(hasZeroSumSubarray(arr2));  // Output: false
