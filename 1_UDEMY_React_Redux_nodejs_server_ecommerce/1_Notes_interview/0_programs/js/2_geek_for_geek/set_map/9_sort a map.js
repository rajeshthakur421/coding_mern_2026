//How to sort a map in JavaScript ?

// Initializing and inserting values into Map
let map1 = new Map([
    [4, 2],
    [2, 3],
]);

// Inserting new element into map using set() method
map1.set(3, 10);
console.log("Our map :");
console.log(map1);

// Adding the sorting logic
map1 = new Map([...map1.entries()].sort());

// Separately printing only keys
for (let [key, value] of map1) {
    console.log(key, " ");
}
