//Find the Kth largest and Kth smallest number in an array.

function findKthLargestAndSmallest(arr, k) {
    const n = arr.length;
    if (k > n || k <= 0) return { kthLargest: null, kthSmallest: null };

    // Sort the array
    arr.sort((a, b) => a - b);

    return {
        kthSmallest: arr[k - 1],
        kthLargest: arr[n - k]
    };
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
const result = findKthLargestAndSmallest(arr, k);
console.log("Kth smallest number:", result.kthSmallest); // Output: 7
console.log("Kth largest number:", result.kthLargest);   // Output: 15
