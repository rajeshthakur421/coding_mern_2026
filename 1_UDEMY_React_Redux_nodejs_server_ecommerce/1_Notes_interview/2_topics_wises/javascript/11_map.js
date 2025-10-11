//array.map(callback(currentValue, index, array), thisArg)

const numbers = [1, 2, 3, 4];
const indexedNumbers = numbers.map((num, index) => `Index ${index}: ${num}`);

console.log(indexedNumbers); 
// Output: ['Index 0: 1', 'Index 1: 2', 'Index 2: 3', 'Index 3: 4']
