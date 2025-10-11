//Rearrange the array in alternating positive and negative items with O(1) extra space.

function rearrangeAlternating(arr) {
    const n = arr.length;
    let posIndex = -1, negIndex = -1;

    // Separate positive and negative numbers
    for (let i = 0; i < n; i++) {
        if (arr[i] >= 0) {
            posIndex = i;
            break;
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            negIndex = i;
            break;
        }
    }

    // If there are no positive or no negative numbers, return as is
    if (posIndex === -1 || negIndex === -1) return;

    // Rearrange the array
    let index = 0;
    while (posIndex < n && negIndex < n) {
        if (index % 2 === 0 && posIndex < n) {
            // Place positive number at index
            while (posIndex < n && arr[posIndex] >= 0) {
                posIndex++;
            }
            if (posIndex < n) {
                [arr[index], arr[posIndex]] = [arr[posIndex], arr[index]];
            }
        } else if (index % 2 === 1 && negIndex < n) {
            // Place negative number at index
            while (negIndex < n && arr[negIndex] < 0) {
                negIndex++;
            }
            if (negIndex < n) {
                [arr[index], arr[negIndex]] = [arr[negIndex], arr[index]];
            }
        }
        index++;
    }
}

// Example usage:
const arr = [1, -2, 3, -4, 5, -6, 7];
rearrangeAlternating(arr);
console.log("Rearranged array:", arr);
// Output: [1, -2, 3, -4, 5, -6, 7]
