// A shallow copy copies the immediate properties of an object but does not recursively copy nested objects.
// This means that nested objects are still shared between the original and the copy.

1; //Using Object.assign
const original = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, original);
console.log(copy); // { a: 1, b: { c: 2 } }
copy.b.c = 3;
console.log(original.b.c); // 3, because `b` is a reference to the same object


2; //Using Spread Syntax
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
console.log(copy); // { a: 1, b: { c: 2 } }
copy.b.c = 3;
console.log(original.b.c); // 3, because `b` is a reference to the same object


3; //using slice
const original = [1, 2, { a: 3 }];
const copy = original.slice();
console.log(copy); // [1, 2, { a: 3 }]
copy[2].a = 4;
console.log(original[2].a); // 4, because the object in the array is a reference to the same object
