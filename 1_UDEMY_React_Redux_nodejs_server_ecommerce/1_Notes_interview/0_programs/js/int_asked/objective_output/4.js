Promise.resolve().then(() => console.log(1));

setTimeout(() => console.log(2));

Promise.resolve().then(() => setTimeout(() => console.log(3)));

new Promise((res) => {

  console.log(4);

  res();
  
}).then(() => console.log(5));

Promise.resolve().then(() => console.log(6));

setTimeout(() => console.log(7));

console.log(8);

/*Final output:
4
8
1
5
6
2
7
3
*/

/*
1: Synchronous Code Execution:
2: Microtasks (Promise .then() callbacks):
3: Macrotasks (setTimeout):
*/