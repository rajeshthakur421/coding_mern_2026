//Maximum Index

function findMaxIndex(arr) {
    let maxIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= i) {
            maxIndex = i;
        }
    }

    return maxIndex;
}

// Example usage:
const arr = [0, 2, 3, 4, 5];
console.log(findMaxIndex(arr));  // Output: 4

const arr2 = [1, 2, 3, 4, 5];
console.log(findMaxIndex(arr2));  // Output: 3
