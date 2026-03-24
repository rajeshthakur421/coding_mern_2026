//find the sum of index, index 1+2 like [0]+[3] index = 20 

function twoSum(nums, target) {
    let numMap = {};  // Create an empty object to store the numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  // Calculate the complement of the current number

        if (complement in numMap) {  // Check if the complement is already in the map
            return [numMap[complement], i];  // If it is, return the indices of the complement and the current number
        }

        numMap[nums[i]] = i;  // Otherwise, store the current number and its index in the map
    }

    return [];  // Return an empty array if no solution is found
}

// Test the function
let nums = [6, 5, 11, 15];
let target = 20;
let result = twoSum(nums, target);
console.log(result);  // Output should be [1, 3                                                                 ]
