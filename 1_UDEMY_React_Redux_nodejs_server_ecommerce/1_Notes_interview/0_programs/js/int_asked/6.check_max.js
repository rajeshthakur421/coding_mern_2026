//pass 3 input values in function and check max

function findMax(a, b, c) {
    let max = a; // Assume a is the maximum initially

    // Compare with b
    if (b > max) {
        max = b;
    }

    // Compare with c
    if (c > max) {
        max = c;
    }

    return max;
}

// Example usage:
const maxNumber = findMax(10, 5, 8);
console.log("Maximum number:", maxNumber); // Output: Maximum number: 10
