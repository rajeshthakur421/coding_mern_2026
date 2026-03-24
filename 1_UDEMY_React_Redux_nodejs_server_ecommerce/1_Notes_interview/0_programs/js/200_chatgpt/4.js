//Given an array which consists of only 0, 1, and 2. Sort the array without using any sorting algorithm.
function sort012(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    // Traverse the array
    while (mid <= high) {
        switch (arr[mid]) {
            case 0:
                // Swap arr[low] and arr[mid] and increment both low and mid
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                low++;
                mid++;
                break;
            case 1:
                // If the element is 1, just move the mid pointer
                mid++;
                break;
            case 2:
                // Swap arr[mid] and arr[high] and decrement high
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
                break;
        }
    }

    return arr;
}

// Example usage:
const arr = [0, 1, 2, 1, 0, 2, 1, 2, 0, 1];
console.log("Original array:", arr);
const sortedArr = sort012(arr);
console.log("Sorted array:", sortedArr);
