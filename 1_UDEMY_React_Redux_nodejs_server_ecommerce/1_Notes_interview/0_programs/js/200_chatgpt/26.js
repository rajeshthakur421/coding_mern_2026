//Maximum sum such that no two elements are adjacent.


function maxSumNonAdjacent(arr) {
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return arr[0];
    if (n === 2) return Math.max(arr[0], arr[1]);

    // Initialize dp array
    const dp = new Array(n);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);

    // Fill dp array
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i-1], arr[i] + dp[i-2]);
    }

    // The last element of dp array contains the result
    return dp[n-1];
}

// Example usage:
const arr = [3, 2, 7, 10];
console.log("Maximum sum of non-adjacent elements:", maxSumNonAdjacent(arr)); // Output: 13
