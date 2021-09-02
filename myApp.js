var express = require("express");
var app = express();

app.get("/", function(req, res) {
  //res.send("Hello Express");
  res.send(__dirname + "/views/index.html");
});

//console.log("Hello World");

module.exports = app;