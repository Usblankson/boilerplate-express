var express = require("express");
var app = express();

 // Task 1
//console.log("Hello World");

  // Task  2
// app.get('/', function(req, res){
//   res.send("Running Script");
// });

  // Task 3
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/views/index.html");
// });

//  Task 4
// Normal usage
//app.use(express.static(__dirname + "/public"));

//Assets at the /public route Usage
app.use("/public", express.static(__dirname + "/public"));


module.exports = app;