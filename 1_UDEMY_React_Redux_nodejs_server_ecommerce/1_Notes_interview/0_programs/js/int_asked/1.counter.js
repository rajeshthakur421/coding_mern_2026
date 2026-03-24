/*
const add = (function () {
  return function () {};
})();
console.log(add()); //1
console.log(add()); //2
console.log(add()); //3
*/

//answer
const add = (function () {
  let counter = 0; // Initialize counter within the outer function

  return function () {
    counter++; // Increment the counter on each call
    return counter; // Return the updated counter value
  };
})();

console.log(add()); // Output: 1
console.log(add()); // Output: 2
console.log(add()); // Output: 3
