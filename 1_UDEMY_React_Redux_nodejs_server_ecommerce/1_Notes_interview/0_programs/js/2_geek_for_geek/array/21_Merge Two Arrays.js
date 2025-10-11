//	JavaScript Program to Merge Two Arrays and Remove Duplicate Items

let arr1 = [1, 2, 3];// Define the first array
let arr2 = [3, 4, 5];
let mergedArray = [...arr1];// Create a new array by copying all elements from arr1 using the spread operator


for (let item of arr2) {// Loop through each element in arr2
  if (mergedArray.indexOf(item) === -1) {  // Check if the current element is not already in mergedArray
    mergedArray.push(item);    // If the element is not found, add it to mergedArray
  }
}

console.log(mergedArray);
