//Find whether an array is a subset of another array.

function isSubset(arr1, arr2) {
    // Create a set from the elements of arr2
    const set = new Set(arr2);

    // Check if each element of arr1 is in the set
    for (const element of arr1) {
        if (!set.has(element)) {
            return false; // If any element is not found, arr1 is not a subset
        }
    }

    return true; // All elements of arr1 are found in arr2
}

// Example usage:
const arr1 = [1, 2, 3];
const arr2 = [4, 1, 2, 8, 3];
console.log("Is arr1 a subset of arr2?", isSubset(arr1, arr2)); // Output: true

const arr3 = [1, 2, 6];
console.log("Is arr3 a subset of arr2?", isSubset(arr3, arr2)); // Output: false
