//Find the first repeating element in an array of integers
//Find the first non-repeating element in a given array of integers

function findFirstRepeatingElement(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return null; // or any indicator that there are no repeating elements
}

// Example usage:
const arr1 = [10, 5, 3, 4, 3, 5, 6];
console.log(findFirstRepeatingElement(arr1));  // Output: 5
