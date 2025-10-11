//JavaScript Program to Create an Array using Intersection of two Arrays

let first_array = [1, 3, 5, 7, 9]; // Define the first array with some numbers

let second_array = [2, 3, 4, 5, 6, 9];// Define the second array with some numbers

// Define a function 'res_arr' that takes two arrays as arguments
let res_arr = (first_array, second_array) => {

  let new_array = [];  // Initialize an empty array to store common elements

  for (let i = 0; i < first_array.length; i++) {    // Loop through each element in the first array

    for (let j = 0; j < second_array.length; j++) {    // Loop through each element in the second array

      if (first_array[i] === second_array[j]) {       // Check if the current element from the first array is equal to the current element from the second array

        new_array.push(first_array[i]);        // If they are equal, push the element into the new array

      }
    }
  }
  return new_array;  // Return the new array containing the common elements

};

console.log("Array obtained is :");
console.log(res_arr(first_array, second_array));
