// Define server 
var express = require('express');
var app = express();

// Connect to server
app.listen(8000);
console.log("Listening in on port 8000");

// middleware
require('./middleware.js')(app, express);

// connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/toDone');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(cb) {
  console.log('connected to db');
});

// export
module.exports = app;
