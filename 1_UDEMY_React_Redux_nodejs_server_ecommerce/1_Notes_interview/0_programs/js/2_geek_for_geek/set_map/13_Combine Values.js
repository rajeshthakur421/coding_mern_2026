//JavaScript Program to Combine Values of Two Maps having Same Key

const map1 = new Map([['India', 1], ['Usa', 2]]);
const map2 = new Map([['India', 3], ['Russia', 4]]);

const result = new Map([...map1]);

map2.forEach((value, key) => {
    if (result.has(key)) {
        result.set(key, result.get(key) + value);
    } else {
        result.set(key, value);
    }
});

console.log(result); 
