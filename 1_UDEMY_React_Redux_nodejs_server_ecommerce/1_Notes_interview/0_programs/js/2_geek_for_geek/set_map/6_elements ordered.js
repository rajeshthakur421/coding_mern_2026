//How are elements ordered in a Set in JavaScript ?

let sample = new Set();
sample.add("Hello");
sample.add("Geek");
sample.add("How");
sample.add("Are");
sample.add("You")
let data = sample.values();
for(let val of data) {
	console.log(val);
}





//
let sample = new Set();
sample.add("Hello");
sample.add("Geek");
sample.add("How");
sample.add("Are");
sample.add("You")

let getit = sample[Symbol.iterator]();
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
