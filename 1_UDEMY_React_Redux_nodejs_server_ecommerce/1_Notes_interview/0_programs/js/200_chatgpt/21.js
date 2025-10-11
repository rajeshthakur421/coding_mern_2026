//Find longest consecutive subsequence.

function longestConsecutiveSubsequence(arr) {
    if (arr.length === 0) return 0;

    const numSet = new Set(arr);
    let longestStreak = 0;

    for (const num of numSet) {
        // Check if it is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage:
const arr = [100, 4, 200, 1, 3, 2];
console.log("Longest consecutive subsequence length:", longestConsecutiveSubsequence(arr)); // Output: 4 (sequence: [1, 2, 3, 4])
