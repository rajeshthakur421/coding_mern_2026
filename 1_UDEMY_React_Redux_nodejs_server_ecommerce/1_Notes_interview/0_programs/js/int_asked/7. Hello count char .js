//"Hello" 
//H:1, e:1, l:2, o:1

function countCharacters(str) {
    const charCount = {};

    for (const char of str) {
        // If the character is already a key in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Otherwise, add the character as a key with a count of 1
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage:
const inputString = "Hello";
const result = countCharacters(inputString);
console.log(result); // Output: { H: 1, e: 1, l: 2, o: 1 }






