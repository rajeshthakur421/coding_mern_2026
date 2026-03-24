//How does Query.prototype.hint() work in Mongoose ?

const express = require('express'); 
const mongoose = require('mongoose'); 
const app = express() 

// Database connection 
mongoose.connect('mongodb://127.0.0.1:27017/geeksforgeeks', { 
	useNewUrlParser: true, 
	useCreateIndex: true, 
	useUnifiedTopology: true
}); 

// User model 
const User = mongoose.model('User', { 
	name: { type: String }, 
	age: { type: Number } 
}); 

var query = User.find(); 
query.hint({index: -1}) 

console.log("Hint:", query.options) 

app.listen(3000, function(error ) { 
	if(error) console.log(error) 
	console.log("Server listening on PORT 3000") 
}); 
