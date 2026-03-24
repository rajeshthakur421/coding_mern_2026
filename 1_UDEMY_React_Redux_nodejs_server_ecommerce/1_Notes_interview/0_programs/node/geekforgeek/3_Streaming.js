//How to do Piping/Streaming of JavaScript objects in Node.js ?

const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

// Constructing promisify
const { promisify } = require('util');
const pipelineAsync = promisify(pipeline);

// Creating a read stream
const myReadStream = fs.createReadStream(
	__dirname + '/read.txt', 'utf8');

// Creating a write stream
const myWriteStream = fs.createWriteStream(
	__dirname + '/write.txt');

// Creating transform stream
const transform = zlib.createGzip();

(async function run() {
	try {

		// Pipelining three streams
		await pipelineAsync(

			// Reading from read stream
			myReadStream,

			// Transforming the file
			transform,

			// Writing on write stream
			myWriteStream
		);
		console.log("Pipeline accomplished");
	}
	catch (err) {
		console.error('pipeline failed with error:', err);
	}
})();
