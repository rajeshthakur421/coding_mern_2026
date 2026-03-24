//Find the repeating and the missing.


function findRepeatingAndMissing(arr) {
    const n = arr.length;
    const seen = new Set();
    let repeating = -1;
    let missing = -1;

    for (let num of arr) {
        if (seen.has(num)) {
            repeating = num;
        }
        seen.add(num);
    }

    for (let i = 1; i <= n; i++) {
        if (!seen.has(i)) {
            missing = i;
        }
    }

    return { repeating, missing };
}

// Example usage:
const arr = [1, 2, 2, 4];
console.log("Repeating and Missing:", findRepeatingAndMissing(arr));
// Output: { repeating: 2, missing: 3 }


