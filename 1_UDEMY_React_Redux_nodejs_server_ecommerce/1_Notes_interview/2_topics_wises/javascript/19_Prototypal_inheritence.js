
// Parent object constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of Animal
Animal.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};

// Child object constructor function
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor with 'this' context
  this.breed = breed;
}

// Inheriting from Animal by setting Dog's prototype to be a new instance of Animal
Dog.prototype = Object.create(Animal.prototype);

// Adding a method specific to Dog
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Creating instances
const myDog = new Dog("Buddy", "Labrador");
myDog.sayName(); // Output: My name is Buddy
myDog.bark(); // Output: Woof!




2;//
// Step 1: Define the base object with a sort method
const baseSorter = {
  sortArray: function(arr) {
    return arr.sort((a, b) => a - b);
  }
};

// Step 2: Create a new object that inherits from the base object
const arraySorter = Object.create(baseSorter);

// Step 3: Use the inherited method to sort an array
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = arraySorter.sortArray(unsortedArray);

console.log('Unsorted Array:', unsortedArray);
console.log('Sorted Array:', sortedArray);
