//Move all the negative elements to one side of the array.

function moveNegatives(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] < 0) {
            // If the element at the left pointer is negative, move the left pointer
            left++;
        } else if (arr[right] >= 0) {
            // If the element at the right pointer is non-negative, move the right pointer
            right--;
        } else {
            // If the left element is non-negative and the right element is negative, swap them
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr;
}

// Example usage:
const arr = [1, -2, 3, -4, -5, 6, -7, 8, -9];
console.log("Original array:", arr);
const rearrangedArr = moveNegatives(arr);
console.log("Rearranged array:", rearrangedArr);
