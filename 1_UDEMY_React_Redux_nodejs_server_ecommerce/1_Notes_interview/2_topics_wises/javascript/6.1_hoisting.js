1;//
console.log(a); // undefined 
var a = 10;
console.log(a); // 10


2;//
console.log(b); //refence error
let b = 20;
console.log(b); // 10


3; //function hoisting
book(); //I am book
console.log(c);
doSomething();


function book(){
    console.log("I am book");
}

book(); //I am book

4; //function expression
bar(); // TypeError bar is not a function because var bar is hoisted, but not the assignment.
var bar = function() {
  console.log("Hello, function expression!");
};
bar(); //output




