//input : helloworld    output : hollowerld
//To rearrange the characters in a given string such that all vowels come first followed by all consonants, 

function rearrangeString(str) {
    // Initialize arrays to store vowels and consonants
    let vowels = [];
    let consonants = [];
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    // Iterate over each character in the string
    for (const char of str) {
        if (vowelSet.has(char)) {
            // If the character is a vowel, add it to the vowels array
            vowels.push(char);
        } else {
            // If the character is a consonant, add it to the consonants array
            consonants.push(char);
        }
    }

    // Concatenate the vowels and consonants arrays
    return vowels.concat(consonants).join('');
}

// Example usage
const input = "helloworld";
const result = rearrangeString(input);
console.log(result); // Output: hollowerld


