//['a', 'a', 'b', 'a', 'c', 1,2,3,2,4,2,2,5 ]
//output: { '1': 1, '2': 4, '3': 1, '4': 1, '5': 1, a: 3, b: 1, c: 1 }

function countElements(arr) {
    const counts = {}; // Initialize an empty object to store the counts

    // Iterate over each element in the array
    for (let element of arr) {
        // If the element is already a key in the counts object, increment its count
        if (counts[element]) { // If the character 'elements' already exists as a key in the 'count' object
            counts[element]++;
        } else {
            // If the element is not a key in the counts object, add it with a count of 1
            counts[element] = 1;
        }
    }

    return counts; // Return the counts object
}

// Example usage
const arr = ['a', 'a', 'b', 'a', 'c', 1, 2, 3, 2, 4, 2, 2, 5];
const elementCounts = countElements(arr);
console.log(elementCounts);

//output: { '1': 1, '2': 4, '3': 1, '4': 1, '5': 1, a: 3, b: 1, c: 1 }