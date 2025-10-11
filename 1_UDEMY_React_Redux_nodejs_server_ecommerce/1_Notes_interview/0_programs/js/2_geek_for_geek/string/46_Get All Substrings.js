//How to Get All Substrings of the Given String in JavaScript ?
function getAllSubstrings(str) {
  // Initialize an empty array to store the substrings.
  const substrings = [];

  // Loop through each character of the string.
  for (let i = 0; i < str.length; i++) {
    // For each character, create substrings starting from the current character to the end of the string.
    for (let j = i + 1; j <= str.length; j++) {
      // Slice the string from index i to index j (exclusive) and add it to the substrings array.
      substrings.push(str.slice(i, j));
    }
  }

  // Return the array containing all substrings.
  return substrings;
}

// Example usage:
const string = "abcd";
console.log(getAllSubstrings(string)); // Output: ["a", "ab", "abc", "abcd", "b", "bc", "bcd", "c", "cd", "d"]
