//JavaScript Program to Count Words of a String
function numberOfWords(str) {
  let count = 0; // Initialize a counter for words
  let check = false; // Initialize a flag to check if we're inside a word

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is not a space and we're not already inside a word
    if (str[i] !== " " && !check) {
      count++; // Increment word count
      check = true; // Set flag to true since we're now inside a word
    } else if (str[i] === " ") {
      check = false; // Reset flag to false when encountering a space
    }
  }

  return count; // Return the total number of words
}

const str = "Welcome to the Geeksforgeeks";
console.log("Word count:", numberOfWords(str)); // Output: Word count: 4
