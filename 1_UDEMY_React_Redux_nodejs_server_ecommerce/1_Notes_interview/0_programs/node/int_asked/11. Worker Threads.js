1; //Create a file named worker.js:

// worker.js
const { parentPort } = require('worker_threads');

// Perform a simple task, e.g., computing the sum of numbers from 1 to 1e6
const compute = () => {
  let sum = 0;
  for (let i = 1; i <= 1e6; i++) {
    sum += i;
  }
  return sum;
};

// Send the result back to the main thread
parentPort.postMessage(compute());


2; //Create a file named main.js:
// main.js
const { Worker } = require('worker_threads');

const runWorker = () => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js');
    
    worker.on('message', resolve); // Listen for messages from the worker
    worker.on('error', reject);    // Listen for errors from the worker
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};

runWorker().then(result => {
  console.log(`Result from worker: ${result}`);
}).catch(err => {
  console.error(err);
});


