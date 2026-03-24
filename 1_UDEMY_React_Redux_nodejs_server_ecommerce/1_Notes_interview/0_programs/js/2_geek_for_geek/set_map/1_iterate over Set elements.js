//How to iterate over Set elements in JavaScript ?

1;//using for of loop
const mySet = new Set();

mySet.add("Virat");
mySet.add("Rohit");
mySet.add("Rahul");

for (const value of mySet) {
    console.log(value);
}


2;//using forEach
const Data = new Set();

Data.add("Delhi");
Data.add("Noida");
Data.add("Gurgaon");

Data.forEach(function (value) {
    console.log(value);
});
