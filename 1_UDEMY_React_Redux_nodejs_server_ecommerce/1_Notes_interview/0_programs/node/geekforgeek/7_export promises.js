//How to export promises from one module to another module node.js ?

function check(number) {
  return new Promise((Resolve, reject) => {
    if (number % 2 == 0) {
      Resolve("The number is even");
    } else {
      reject("The number is odd");
    }
  });
}

// Exporting check function
module.exports = {
  check: check,
};

// Importing check function
const promise = require("./FirstModule.js");

// Promise handling
promise
  .check(8)
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
