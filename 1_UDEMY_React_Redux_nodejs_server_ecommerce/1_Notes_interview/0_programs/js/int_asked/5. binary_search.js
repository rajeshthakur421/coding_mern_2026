function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);//find middle 

        if (arr[mid] === target) {
            return mid; // Target found, return its index
        } else if (arr[mid] < target) {
            low = mid + 1; // Narrow search to the right half
        } else {
            high = mid - 1; // Narrow search to the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found in the array");
}
