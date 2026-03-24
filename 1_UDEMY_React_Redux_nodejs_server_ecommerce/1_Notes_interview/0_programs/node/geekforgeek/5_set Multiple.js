//How to set Multiple Web Apps with Different Base Directories on the Same Express Server?

// Requiring express 
const express= require('express'); 
const app = express(); 

// Sending message for second application 
app.get("/",function(req,res){ 
res.send('<p>This is GFG application 2</p>') 
}); 

// Listening on port 4000 
app.listen(4000,function(){ 
console.log("Server is running on port 4000"); 
}); 
