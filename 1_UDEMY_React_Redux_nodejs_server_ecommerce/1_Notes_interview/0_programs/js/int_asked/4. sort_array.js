//const arr = [3,9,4,5,7,8,1,6,11,2]; sort asc, desc

const bubbleSortAsc = (arr) => {
    const n = arr.length;
    const sortedArr = [...arr]; // Copy the array to avoid mutating the original

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap elements
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
    }
    return sortedArr;
};

const arr = [3, 9, 4, 5, 7, 8, 1, 6, 11, 2];
console.log("Ascending order:", bubbleSortAsc(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
