//JavaScript Program to Replace All Occurrences of a String

function replaceAllOccurrences(str, find, replace) {
    let result = '';
    let findLength = find.length;
    
    for (let i = 0; i < str.length;) {
        // Check if the substring from current index matches 'find'
        if (str.substring(i, i + findLength) === find) {
            // Append the replacement string
            result += replace;
            
            // Move i past the 'find' substring
            i += findLength;
        } else {
            // Append the current character in 'str' to 'result'
            result += str[i];
            // Move to the next character
            i++;
        }
    }
    
    return result;
}

// Example usage:
let originalStr = "Hello world, hello universe";
let modifiedStr = replaceAllOccurrences(originalStr, "hello", "hi");

console.log(modifiedStr); // Output: "Hello world, hi universe"
