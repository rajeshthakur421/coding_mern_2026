//Minimum no. of Jumps to reach the end of an array.

function minJumps(arr) {
    if (arr.length <= 1) return 0; // If array length is 1 or less, no jumps are needed

    let jumps = 0; // To count the number of jumps
    let farthest = 0; // The farthest point we can reach
    let currentEnd = 0; // The end of the range for the current jump

    for (let i = 0; i < arr.length - 1; i++) {
        // Update the farthest point we can reach
        farthest = Math.max(farthest, i + arr[i]);

        // If we have reached the end of the range for the current jump
        if (i === currentEnd) {
            jumps++; // Increase the jump count
            currentEnd = farthest; // Update the end of the range for the next jump

            // If we can reach or exceed the end of the array, break
            if (currentEnd >= arr.length - 1) break;
        }
    }

    return jumps;
}

// Example usage:
const arr = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1];
console.log("Minimum number of jumps:", minJumps(arr)); // Output: 4
