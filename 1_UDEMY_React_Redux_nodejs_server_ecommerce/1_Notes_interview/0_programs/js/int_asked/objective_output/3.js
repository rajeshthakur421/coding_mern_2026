const Person = {
  lang: "JS",
  show: function () {
    console.log(`hi. ${this.lang}`);
  },
};
let fn = Person.show;
fn();

//Output: "hi. undefined"

/*
    The output of fn() will be hi. undefined. 
    This happens because this.lang inside the show 
    function now refers to lang property of the global
     object (or undefined if in strict mode), not the 
     lang property of the Person object.*/
