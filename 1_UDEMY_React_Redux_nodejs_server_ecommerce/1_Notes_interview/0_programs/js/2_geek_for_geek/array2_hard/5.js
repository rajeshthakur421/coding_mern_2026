//Find Subarray with given Sum from Array of non-negative Numbers

function findSubarrayWithGivenSum(arr, targetSum) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > targetSum && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === targetSum) {
            return arr.slice(start, end + 1);
        }
    }

    return null;
}

// Example usage:
const arr = [1, 2, 3, 7, 5];
const targetSum = 12;
const result = findSubarrayWithGivenSum(arr, targetSum);
console.log(result);  // Output: [5, 7]
