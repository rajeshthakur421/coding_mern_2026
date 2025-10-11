//Find the “Kth” max and min element of an array.


function kthMin(arr, k) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    // Return the Kth minimum element
    return arr[k - 1];
}

function kthMax(arr, k) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    // Return the Kth maximum element
    return arr[k - 1];
}

// Example usage:
const arr = [2, 3, 4, 5, 6];
const k = 2;

console.log(`The ${k}th minimum element is: ${kthMin(arr, k)}`); // Output: The 2th minimum element is: 3
console.log(`The ${k}th maximum element is: ${kthMax(arr, k)}`); // Output: The 2th maximum element is: 5
