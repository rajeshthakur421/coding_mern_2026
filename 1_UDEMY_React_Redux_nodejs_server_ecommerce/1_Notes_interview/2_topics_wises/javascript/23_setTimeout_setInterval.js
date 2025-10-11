//settimeout
function greet() {
  console.log("Hello, world!");
}

setTimeout(greet, 2000); // Executes greet() after 2000 milliseconds (2 seconds)

//setinterval
let count = 0;

function displayCount() {
  console.log(`Count: ${count}`);
  count++;
}

let intervalId = setInterval(displayCount, 1000); // Executes displayCount() every 1000 milliseconds (1 second)
