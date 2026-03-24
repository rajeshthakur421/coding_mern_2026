// iterate over a JavaScript object

let car = {
  make: "Tesla",
  model: "Model S",
  year: 2020
};

//most uses
// Using for...in loop 
console.log("Using for...in loop:");
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}



// Using Object.keys()
console.log("\nUsing Object.keys():");
Object.keys(car).forEach(key => {
  console.log(`${key}: ${car[key]}`);
});

// Using Object.values()
console.log("\nUsing Object.values():");
Object.values(car).forEach(value => {
  console.log(value);
});

// Using Object.entries()
console.log("\nUsing Object.entries():");
Object.entries(car).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Using for...of with Object.entries()
console.log("\nUsing for...of with Object.entries():");
for (let [key, value] of Object.entries(car)) {
  console.log(`${key}: ${value}`);
}
