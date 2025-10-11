//Find the triplet that sum to a given value.

function findTriplets(arr, target) {
    const n = arr.length;
    if (n < 3) return [];

    // Sort the array
    arr.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum === target) {
                result.push([arr[i], arr[left], arr[right]]);
                
                // Skip duplicates
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        
        // Skip duplicates for the first element
        while (i < n - 2 && arr[i] === arr[i + 1]) i++;
    }

    return result;
}

// Example usage:
const arr = [1, 2, -1, 0, -2, 1];
const target = 0;
console.log("Triplets that sum to the target:", findTriplets(arr, target));
// Output: [ [ -2, 1, 1 ], [ -1, 0, 1 ] ]
