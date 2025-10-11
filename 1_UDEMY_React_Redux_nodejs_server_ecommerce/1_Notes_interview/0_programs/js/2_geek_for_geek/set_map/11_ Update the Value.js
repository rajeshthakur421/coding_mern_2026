//JavaScript Program to Update the Value for a Specific Key in Map

// Creating a map object
let m = new Map([
    ["a", 100],
    ["b", 200],
]);

// Display old value
console.log("Old value for key: 'b', " + m.get("b"));


// Iterate and change the required value 
m.forEach((value, key) => {
    if (key == "b") m.set(key, 1000);
});

// Display updated value
console.log("New value for key: 'b', " + m.get("b"));
