//JavaScript Program to find Smallest and Largest Word in a String
function myFunction(str) {
  // Split the input string into an array of words based on spaces.
  let words = str.split(" ");

  // Handle the case where the input string is empty.
  if (words.length === 0) {
    return { smallest: "", largest: "" };
  }

  // Initialize the smallest and largest words as the first word in the array.
  let smallest = words[0];
  let largest = words[0];

  // Loop through the array of words starting from the second word.
  for (let i = 1; i < words.length; i++) {
    let word = words[i];

    // Update the smallest word if the current word is shorter.
    if (word.length < smallest.length) {
      smallest = word;
    }

    // Update the largest word if the current word is longer.
    if (word.length > largest.length) {
      largest = word;
    }
  }

  // Return an object containing the smallest and largest words.
  return { smallest, largest };
}


let inputStr = "GeeksforGeeks a computer science portal.";
let result = myFunction(inputStr);
console.log(result);
