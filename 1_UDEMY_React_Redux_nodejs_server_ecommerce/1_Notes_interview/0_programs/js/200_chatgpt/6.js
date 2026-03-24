//Write a program to cyclically rotate an array by one.

function rotateArrayByOne(arr) {
    // Check if the array is empty or has only one element
    if (arr.length <= 1) return arr;

    // Store the last element
    const lastElement = arr[arr.length - 1];

    // Shift elements to the right
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    // Place the last element at the beginning
    arr[0] = lastElement;

    return arr;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);
const rotatedArr = rotateArrayByOne(arr);
console.log("Rotated array:", rotatedArr);

