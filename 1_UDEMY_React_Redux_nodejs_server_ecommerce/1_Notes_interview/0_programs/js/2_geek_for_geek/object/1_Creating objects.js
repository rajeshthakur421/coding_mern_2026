//Creating objects in JavaScript
1; // Object Literal
2; // Using new Object()
3; // Constructor Function
4; // Object.create()
5; // Using Classes (ES6+)

// Object Literal
let person1 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Using new Object()
let person2 = new Object();
person2.name = "Jane";
person2.age = 25;
person2.city = "San Francisco";

// Constructor Function
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
let person3 = new Person("Alice", 28, "Los Angeles");

// Object.create()
let personProto = {
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
let person4 = Object.create(personProto);
person4.name = "Bob";
person4.age = 35;
person4.city = "Chicago";

// Using Classes (ES6+)
class PersonClass {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
let person5 = new PersonClass("Eve", 32, "Miami");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);

person4.greet();
person5.greet();
