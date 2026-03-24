//Given an array of size n and a number k, find all elements that appear more than “ n/k ” times.

function findElementsWithMoreThanNbyK(arr, k) {
    const n = arr.length;
    if (k <= 1) return arr;

    // Step 1: Find potential candidates
    const candidateCounts = new Map();

    for (const num of arr) {
        if (candidateCounts.has(num)) {
            candidateCounts.set(num, candidateCounts.get(num) + 1);
        } else if (candidateCounts.size < k - 1) {
            candidateCounts.set(num, 1);
        } else {
            for (const key of candidateCounts.keys()) {
                candidateCounts.set(key, candidateCounts.get(key) - 1);
                if (candidateCounts.get(key) === 0) {
                    candidateCounts.delete(key);
                }
            }
        }
    }

    // Step 2: Verify candidates
    const result = [];
    const finalCounts = new Map();

    for (const num of candidateCounts.keys()) {
        finalCounts.set(num, 0);
    }

    for (const num of arr) {
        if (finalCounts.has(num)) {
            finalCounts.set(num, finalCounts.get(num) + 1);
        }
    }

    for (const [num, count] of finalCounts.entries()) {
        if (count > n / k) {
            result.push(num);
        }
    }

    return result;
}

// Example usage:
const arr = [3, 1, 2, 3, 2, 3, 4, 5, 3];
const k = 3;
console.log("Elements appearing more than n/k times:", findElementsWithMoreThanNbyK(arr, k));
// Output: [3]
