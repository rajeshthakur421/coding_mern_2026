//How to Add a key/value Pair to Map in JavaScript ?

// Given array
const arr = [
    ["a", 100],
    ["b", 200],
];

// Map object
let map1 = new Map();

// Iterate the array and insert pairs to map
arr.map(([key, value]) => map1.set(key, value));


/* Use forEach to add each pair to the map
pairs.forEach(([key, value]) => {
    map1.set(key, value);
});
*/

// Display output
console.log(map1);

