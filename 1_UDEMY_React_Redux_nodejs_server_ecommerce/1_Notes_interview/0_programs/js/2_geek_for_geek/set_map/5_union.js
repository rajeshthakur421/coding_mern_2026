//How to get the union of two sets in JavaScript ?
function showUnion(sA, sB) {
	const union = new Set(sA);
	for (const num of sB) {
		union.add(num);
	}
	return union;
}
const s1 = new Set(['1', '6', '8']);
const s2 = new Set(['2', '3', '4']);
console.log(showUnion(s1, s2));
