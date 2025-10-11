//Sort Words in Alphabetical Order
// Implementing bubble sort function
// Function to perform bubble sort on an array of words

function bubbleSort(wordsArray) {
  const length = wordsArray.length; // Getting the size of the array

  // Outer loop for iterating over the array
  for (let i = 0; i < length - 1; i++) {
    // Inner loop for comparison and swapping
    for (let j = 0; j < length - i - 1; j++) {
      // Comparing adjacent elements using localeCompare to handle alphabetical order
      if (
        wordsArray[j].localeCompare(wordsArray[j + 1], undefined, {
          sensitivity: "base",
        }) > 0
      ) {
        // Swapping words in the array
        const temp = wordsArray[j];
        wordsArray[j] = wordsArray[j + 1];
        wordsArray[j + 1] = temp;
      }
    }
  }

  return wordsArray; // Returning the sorted array
}

// Example array of words to be sorted
const words = [
  "JavaScript",
  "Program",
  "to",
  "Sort",
  "Words",
  "in",
  "Alphabetical",
  "Order",
];

// Sorting the array using bubble sort
const sortedWords = bubbleSort(words);

// Output the sorted array
console.log(sortedWords); // Output: ["Alphabetical", "JavaScript", "Order", "Program", "Sort", "Words", "in", "to"]
