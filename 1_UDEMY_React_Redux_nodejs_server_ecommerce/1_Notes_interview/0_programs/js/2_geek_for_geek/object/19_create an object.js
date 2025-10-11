//How to create an object from the given key-value pairs using JavaScript

let object = {};
let keys = [0, 1, 2];
let values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];
for (let i = 0; i < keys.length; i++) {
  object[keys[i]] = values[i];
}
console.log(object);

