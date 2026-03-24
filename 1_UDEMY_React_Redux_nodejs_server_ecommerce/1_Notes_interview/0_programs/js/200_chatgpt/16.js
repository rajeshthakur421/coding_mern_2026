//Count pairs with given sum.

function countPairsWithSum(arr, targetSum) {
    const seen = new Map();
    let count = 0;

    for (const num of arr) {
        const complement = targetSum - num;

        if (seen.has(complement)) {
            count += seen.get(complement);
        }

        // Update the frequency of the current number in the hash map
        seen.set(num, (seen.get(num) || 0) + 1);
    }

    return count;
}

// Example usage:
const arr = [1, 5, 7, -1, 5];
const targetSum = 6;
console.log("Number of pairs with given sum:", countPairsWithSum(arr, targetSum)); // Output: 3
