//Merge two sorted arrays without extra space.

function mergeInPlace(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    // Helper function to insert an element from arr2 into arr1 and maintain order
    function insertElement(element, start) {
        let i = start;
        while (i < n && arr1[i] < element) {
            i++;
        }
        // Move elements in arr1 to the right to make space for the new element
        for (let j = n - 1; j >= i; j--) {
            arr1[j + 1] = arr1[j];
        }
        arr1[i] = element;
        n++;
    }

    // Merge process
    for (let i = 0; i < m; i++) {
        insertElement(arr2[i], 0);
    }

    // Copy remaining elements of arr1 to arr2
    let idx1 = 0, idx2 = 0;
    while (idx1 < n && idx2 < m) {
        if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else {
            [arr1[idx1], arr2[idx2]] = [arr2[idx2], arr1[idx1]];
            idx1++;
            idx2++;
        }
    }

    // Sort the remaining elements in arr1
    arr1.sort((a, b) => a - b);

    // If there are any remaining elements in arr2, sort them as well
    while (idx2 < m) {
        arr2[idx2] = arr1[n - m + idx2];
        idx2++;
    }
}

// Example usage:
let arr1 = [1, 5, 9, 10, 15];
let arr2 = [2, 3, 8, 13];
mergeInPlace(arr1, arr2);
console.log("Merged array 1:", arr1);
console.log("Merged array 2:", arr2);
