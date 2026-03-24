//How to perform intersection of two sets in JavaScript ?

function getIntersection(set1, set2) { 
	const ans = new Set(); 
	for (let i of set2) { 
		if (set1.has(i)) { 
			ans.add(i); 
		} 
	} 
	return ans; 
} 
const set1 = new Set([1, 2, 3, 8, 11]); 
const set2 = new Set([1, 2, 5, 8]); 

const result = getIntersection(set1, set2); 
console.log(result);
