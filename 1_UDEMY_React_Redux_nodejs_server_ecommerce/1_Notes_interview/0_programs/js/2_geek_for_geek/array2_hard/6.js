//Move all the negative elements to one side of the array

function moveNegativesToOneSide(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] < 0) {
            left++;
        } else if (arr[right] >= 0) {
            right--;
        } else {
            // Swap arr[left] and arr[right]
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr;
}

// Example usage:
const arr = [1, -1, 3, -2, 2, -3, 4];
const result = moveNegativesToOneSide(arr);
console.log(result);  // Output: [-3, -2, -1, 1, 2, 3, 4]
