/*
spawn()- launches a command in a new process and we can use it to pass that command any arguments.
fork() - spawns a new process with communication between parent and child (process and thread).
exec() - test for the match in a string
execFile()- similar to exec() but allows you to specify the path to the executable file directly instead of using a shell.
*/

const { exec, execFile, spawn, fork } = require('child_process');

// Example using exec
exec('ls -lh', (error, stdout, stderr) => {
  console.log(`exec stdout:\n${stdout}`);
});

// Example using execFile
execFile('node', ['-v'], (error, stdout, stderr) => {
  console.log(`execFile stdout: ${stdout}`);
});

// Example using spawn
const spawnChild = spawn('ls', ['-lh']);

spawnChild.stdout.on('data', (data) => {
  console.log(`spawn stdout:\n${data}`);
});

spawnChild.stderr.on('data', (data) => {
  console.error(`spawn stderr: ${data}`);
});

spawnChild.on('close', (code) => {
  console.log(`spawn child process exited with code ${code}`);
});

// Example using fork
const forkChild = fork('./child.js');

forkChild.on('message', (message) => {
  console.log(`fork received message from child: ${message}`);
});

forkChild.send('Hello from parent');

// Content for child.js
// Save this as child.js in the same directory
/*
process.on('message', (message) => {
  console.log(`child received message from parent: ${message}`);
  process.send('Hello from child');
});
*/


