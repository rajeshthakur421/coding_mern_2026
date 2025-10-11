//How to serialize a Map in JavaScript ?

1;// Using Array.from() and JSON.stringify() Method
const map = new Map([
	[1, 2],
	[2, 3],
	[4, 5]
]);

const arr = Array.from(map1);
const serialized = JSON.stringify(arr);

console.log(serialized);




2;//Using Object.fromEntries() and JSON.stringify() Method
const map1 = new Map([
	[1, 2],
	[2, 3],
	[4, 5]
]);

const obj = Object.fromEntries(map1);
const serialized1 = JSON.stringify(obj);

console.log(serialized);
