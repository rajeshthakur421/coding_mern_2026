//Find the Missing Number

function findMissingNumber(arr) {
    const n = arr.length + 1;  // Because one number is missing
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    return expectedSum - actualSum;
}

// Example usage:
const arr = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(arr);
console.log(`The missing number is: ${missingNumber}`);  // Output: The missing number is: 3
