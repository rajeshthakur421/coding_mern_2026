//Find the maximum and minimum element in an array.
const arr = [2, 3, 4, 5, 6];

const max = arr.reduce((acc, val) => (val > acc ? val : acc), arr[0]);
const min = arr.reduce((acc, val) => (val < acc ? val : acc), arr[0]);

console.log(`Maximum element is: ${max}`); // Output: Maximum element is: 6
console.log(`Minimum element is: ${min}`); // Output: Minimum element is: 2
