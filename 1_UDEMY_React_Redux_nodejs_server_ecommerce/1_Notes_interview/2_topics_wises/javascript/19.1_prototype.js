/*every object has an internal property called [[Prototype]]

why prototype
Mechanism for Inheritance 
Efficient Memory Usage
Customization and Flexibility
Object Creation and Delegation

you can not add a new property to an existing object constructor:
To add a new property to a constructor, you must add it to the constructor function:

*/
1;//
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const john = new Person('John');
  john.sayHello(); 
  
  // Outputs: Hello, my name is John
  

  2;// Adding Properties to the Constructor //interview

  function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  
  Car.maxSpeed = 200;
  Car.prototype.lowSpeed = 40;
  
  console.log(Car.maxSpeed); // Outputs: 200
  
  // Creating instances
  const car1 = new Car('Toyota', 'Camry');
  console.log(car1.maxSpeed); // Outputs: undefined (not inherited by instances)
  console.log(car1.lowSpeed); //output : 40
  