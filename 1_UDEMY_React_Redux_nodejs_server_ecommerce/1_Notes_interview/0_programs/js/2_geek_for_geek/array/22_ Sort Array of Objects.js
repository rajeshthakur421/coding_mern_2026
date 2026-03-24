//JavaScript Program to Sort Array of Objects by String Property Value

// Define an array of objects, each with 'f_name' and 'l_name' properties
let GFG_Object = [
  { f_name: "geeks", l_name: "_2" },
  { f_name: "For", l_name: "_1" },
  { f_name: "GFG", l_name: "_3" },
];

let mapped = GFG_Object.map((el, i) => {// Create a new array by mapping over GFG_Object
  return { index: i, value: el.f_name.toLowerCase() };  // For each element, return an object containing the index and the lowercase 'f_name' value
});

mapped.sort((a, b) => {// Sort the mapped array based on the 'value' property (lowercase 'f_name')
  if (a.value < b.value) {   // Compare the 'value' properties and return -1, 1, or 0 for sorting
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
});

// Create a new array by mapping over the sorted mapped array
  // For each element, return the corresponding original object from GFG_Object using the 'index' property
let result = mapped.map((el) => GFG_Object[el.index]);

console.log(result);
