//Find duplicate in an array of N+1 Integers.

function findDuplicate(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }

    return -1; // Just in case there's no duplicate
}

// Example usage:
const nums = [1, 3, 4, 2, 2];
console.log("Duplicate number is:", findDuplicate(nums)); // Output: 2
