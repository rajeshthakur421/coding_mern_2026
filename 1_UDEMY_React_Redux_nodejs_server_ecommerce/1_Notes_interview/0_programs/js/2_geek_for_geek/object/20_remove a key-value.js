//How to remove a key-value pair from JavaScript object

let details = {
  name: "Alex",
  age: 30,
  country: "Canada",
};

console.log("Original Object: ", details);

details = Object.keys(details) // Get array of keys from original object
  .filter((objKey) => objKey !== "age") // Filter out the 'age' key
  .reduce((newObj, key) => {
    newObj[key] = details[key]; // Assign key-value pair to new object
    return newObj; // Return updated new object
  }, {});

console.log(details);



