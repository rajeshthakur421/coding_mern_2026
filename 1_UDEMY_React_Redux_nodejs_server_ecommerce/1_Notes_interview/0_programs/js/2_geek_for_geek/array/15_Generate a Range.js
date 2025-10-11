//Generate a Range of Numbers and Characters
//1,2,3,4
function generateNumber(num1, num2) {
  const result = []; // Step 1: Initialize an empty array to store the result

  // Step 2: Iterate over a range of numbers from num1 to num2
  for (let i in [...Array(num2 - num1 + 1)]) {
    result.push(Number(i) + num1); // Step 3: Push each number into the result array
  }

  return result; // Step 4: Return the array containing the range of numbers
}

const resultNumbers = generateNumber(1, 8); // Step 5: Call the function with range 1 to 8
console.log(resultNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


//A,B,C
const startChar = "A"; // Step 1: Define the starting character
const endChar = "G";   // Step 2: Define the ending character
const resultChars = []; // Step 3: Initialize an empty array to store the result

// Step 4: Loop through character codes from startChar to endChar
for (let charCode = startChar.charCodeAt(0); charCode <= endChar.charCodeAt(0); charCode++) {
  resultChars.push(String.fromCharCode(charCode)); // Step 5: Convert character code to character and push to result array
}

console.log(resultChars); // Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G']

