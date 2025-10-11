let a =1;
let b =a;
a=5;
const obj1={"greeting":"Hello"};
const obj2= JSON.parse(JSON.stringify(obj1));
obj1["greeting"] = "bye";
console.log(a);
console.log(b);
console.log(obj1);
console.log(obj2);


/*
console.log(a);    // Output: 5
console.log(b);    // Output: 1
console.log(obj1); // Output: { greeting: 'bye' }
console.log(obj2); // Output: { greeting: 'Hello' }
*/