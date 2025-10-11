/*
const obj = {
  levelOne: {
    propertyOne: "propertyOneVal",
    levelTwo: {
      propertyTwo: "propertyTowVal",
      levelThree: {
        propertyThree: "propertyThreeVal",
      },
    },
  },
};


getValue(obj , 'obj.levelOne.propertyOne');//propertyOneVal
getValue(obj , 'obj.levelOne.propertyTwo');//undefined
getValue(obj , 'obj.levelOne.levelTwo');//{
// propertyTwo: "propertyTowVal",
// levelThree:{
// propertyThree: "propertyThreeVal",
// }
// }
*/


//answer
function getValue(obj, path) {
  // Remove the initial 'obj.' from the path
  const properties = path.replace(/^obj\./, '').split('.');

  // Traverse the object according to the path
  let current = obj;
  for (const property of properties) {
      if (current[property] === undefined) {
          return undefined;
      }
      current = current[property];
  }
  return current;
}

// Example usage:
const obj = {
  levelOne: {
      propertyOne: "propertyOneVal",
      levelTwo: {
          propertyTwo: "propertyTowVal",
          levelThree: {
              propertyThree: "propertyThreeVal",
          },
      },
  },
};

console.log(getValue(obj, 'obj.levelOne.propertyOne')); // Output: propertyOneVal
console.log(getValue(obj, 'obj.levelOne.propertyTwo')); // Output: undefined
console.log(getValue(obj, 'obj.levelOne.levelTwo')); 
// Output: { propertyTwo: "propertyTowVal", levelThree: { propertyThree: "propertyThreeVal" } }
