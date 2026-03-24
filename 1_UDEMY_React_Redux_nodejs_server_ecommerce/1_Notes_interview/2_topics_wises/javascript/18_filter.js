//array.filter(callback(element[, index[, array]])[, thisArg])


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter((number) => {
  return number % 2 !== 0;
});

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
