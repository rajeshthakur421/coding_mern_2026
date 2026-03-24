//call you can write a method that can be used on different objects.
1;//
const obj1 = {
  firstName: "First_name",
  lastName: "Last_name",
};

const obj2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

function printName() {
  console.log(this.firstName + " " + this.lastName);
}
printName.call(obj2);



//Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const persons = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};



persons.fullName.apply(person1, ["Pune", "Mumbai"]);





//Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
console.log(fullName())