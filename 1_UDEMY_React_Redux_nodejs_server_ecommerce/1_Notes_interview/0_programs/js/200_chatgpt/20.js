//Find maximum product subarray.

function maxProductSubarray(arr) {
    if (arr.length === 0) return 0;

    let maxProduct = arr[0];
    let minProduct = arr[0];
    let currentMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];

        // Swap max and min if the current number is negative
        if (num < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        // Update the maxProduct and minProduct
        maxProduct = Math.max(num, num * maxProduct);
        minProduct = Math.min(num, num * minProduct);

        // Update currentMax with the highest product so far
        currentMax = Math.max(currentMax, maxProduct);
    }

    return currentMax;
}

// Example usage:
const arr = [2, 3, -2, 4];
console.log("Maximum product subarray:", maxProductSubarray(arr)); // Output: 6 (subarray [2, 3])
