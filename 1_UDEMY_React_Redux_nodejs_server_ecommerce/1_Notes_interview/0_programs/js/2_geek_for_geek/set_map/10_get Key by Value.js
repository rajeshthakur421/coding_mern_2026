//JavaScript Program to get Key by Value in a Map

function keyValue(map, searchKey) {
  for (const [key, value] of map.entries()) {
    if (value === searchKey) return key;
  }
  return undefined;
}

let students = new Map();
students.set("1", "Diya");
students.set("2", "Arav");
students.set("3", "Priyanka");
students.set("4", "Raj");

console.log("Key associated with the value is: " + keyValue(students, "Diya"));
