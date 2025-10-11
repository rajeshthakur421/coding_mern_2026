//A deep copy recursively copies all levels of an object, so that the original and the copy do not share any nested objects.

1; // Using JSON Methods

const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));

copy.b.c = 3;
console.log(original.b.c); // 2, the original object is not affected


2; //how work 
/*
Serialization with JSON.stringify():
convert objet to string, This string is a text representation of the object, including all its properties and nested objects.

Deserialization with JSON.parse():
parses a JSON string and converts it back into a JavaScript object.
This new object is a deep copy of the original object, as the entire structure is recreated from the JSON string.
*/