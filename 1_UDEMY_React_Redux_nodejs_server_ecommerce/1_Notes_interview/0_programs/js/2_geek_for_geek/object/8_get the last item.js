//How to get the last item of JavaScript object

// Define an object
let Obj = {
  "1_prop": "1_Val",
  "2_prop": "2_Val",
  "3_prop": "3_Val",
};

// Define a function to find the last key-value pair in the object
function GFG_Fun() {
  // Loop through each key in the object
  for (let lastElement in Obj);
  // The above line does nothing (error in the loop structure)

  // Log the last key and its corresponding value
  console.log(lastElement);
  console.log(Obj[lastElement]);
}

// Call the function to execute
GFG_Fun();
