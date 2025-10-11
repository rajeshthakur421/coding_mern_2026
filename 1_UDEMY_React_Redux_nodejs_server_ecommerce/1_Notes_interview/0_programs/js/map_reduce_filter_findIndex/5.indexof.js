// Define an array of fruits
const fruits = ['apple', 'banana', 'orange', 'pear', 'banana'];

// Use indexOf() to find the index of 'banana'
const index1 = fruits.indexOf('banana');
console.log(`Index of 'banana': ${index1}`);

// Use indexOf() to find the index of 'banana' starting from index 2
const index2 = fruits.indexOf('banana', 2);
console.log(`Index of 'banana' starting from index 2: ${index2}`);

// Use indexOf() to find the index of 'grape' (not in array)
const index3 = fruits.indexOf('grape');
console.log(`Index of 'grape': ${index3}`);
