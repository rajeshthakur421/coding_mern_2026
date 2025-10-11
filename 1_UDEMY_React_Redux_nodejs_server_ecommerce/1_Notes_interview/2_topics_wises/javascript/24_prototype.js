//Prototype is used to provide additional property to all the objects created from a constructor function.

// Constructor function for creating Person objects
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Adding a method to the prototype of Person
Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Creating instances of Person
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

console.log(person1.fullName()); // Output: John Doe
console.log(person2.fullName()); // Output: Jane Smith
