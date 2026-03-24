//How to iterate over Map elements in JavaScript ?

let newMap = new Map()

newMap.set("Cricket", "sport");
newMap.set("Apple", "fruit");

for (let [key, value] of newMap) {
    console.log(key + " is " + value);
}
