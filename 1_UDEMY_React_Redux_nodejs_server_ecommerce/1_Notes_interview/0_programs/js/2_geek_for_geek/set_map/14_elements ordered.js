//How are elements ordered in a Map in JavaScript ?

const sample = new Map();
sample.set("name", "Rahul");
sample.set("age", 20);
sample.set("Country", "India");
for(let [key, value] of sample){
	console.log(`Key = ${key}, Value=${value}`)
}
