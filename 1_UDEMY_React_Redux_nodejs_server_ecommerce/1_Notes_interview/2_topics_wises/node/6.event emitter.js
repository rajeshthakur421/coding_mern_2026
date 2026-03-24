/*An event emitter is a pattern that listens to a named event, fires a callback, then emits that event with a value. 
on- registering events
emit- trigering events
removeListener - remove listener
*/

// Importing events 
const EventEmitter = require('events'); 

// Initializing event emitter instances 
var eventEmitter = new EventEmitter(); 

var geek1= (msg) => { 
	console.log("Message from geek1: " + msg); 
}; 

var geek2 = (msg) => { 
	console.log("Message from geek2: " + msg); 
}; 

// Registering geek1 and geek2 
eventEmitter.on('myEvent', geek1); 
eventEmitter.on('myEvent', geek1); 
eventEmitter.on('myEvent', geek2); 

// Removing listener geek1 that was 
// registered on the line 13 
eventEmitter.removeListener('myEvent', geek1); 

// Triggering myEvent 
eventEmitter.emit('myEvent', "Event occurred"); 

// Removing all the listeners to myEvent 
eventEmitter.removeAllListeners('myEvent'); 

// Triggering myEvent 
eventEmitter.emit('myEvent', "Event occurred"); 
