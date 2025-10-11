//Find the minimum and maximum element in an array

function findMinAndMax(nums) {
    if (nums.length === 0) {
        throw new Error('Array is empty');
    }

    let min = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return { min, max };
}

// Example usage:
const nums = [3, 5, 1, 8, -2, 7];
const result = findMinAndMax(nums);
console.log(`Minimum element is: ${result.min}`);
console.log(`Maximum element is: ${result.max}`);
