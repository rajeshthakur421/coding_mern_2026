//Rearrange the array in alternating positive and negative items

function rearrangeAlternating(arr) {
    let posIndex = 0;
    let negIndex = 0;
    const n = arr.length;
    
    // Separate positives and negatives
    const positives = arr.filter(num => num >= 0);
    const negatives = arr.filter(num => num < 0);

    // Merge arrays alternately
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0 && posIndex < positives.length) {
            arr[i] = positives[posIndex++];
        } else if (negIndex < negatives.length) {
            arr[i] = negatives[negIndex++];
        }
    }

    return arr;
}

// Example usage:
const arr = [1, -2, 3, -4, 5, -6, 7];
const rearrangedArr = rearrangeAlternating(arr);
console.log(rearrangedArr);  // Output: [1, -2, 3, -4, 5, -6, 7]
