//How to Convert Array to Set in JavaScript?

1;//Using the Set Constructor
const array1 = [1, 2, 2, 3, 4, 4, 5];

// Convert array to Set
const setFromArray = new Set(array1);

// Convert Set back to array (if needed)
const newArray = Array.from(setFromArr);

// Output
console.log(setFromArray); // Output: Set { 1, 2, 3, 4, 5 }
console.log(newArray);   // Output: [1, 2, 3, 4, 5]







2;//Using the forEach Loop
const array = [1, 2, 3, 3, 4, 4, 5];

// Create an empty Set
const setFromArr = new Set();

// Iterate over each element of the array
array.forEach(element => {
    // Add each element to the Set
    setFromArr.add(element);
});

// Output the Set
console.log(setFromArr); // Output: Set(5) { 1, 2, 3, 4, 5 }
