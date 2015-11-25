var mongoose = require('mongoose');

var tasksSchema = new mongoose.Schema({
  Name: String,
  Frequency: Number,
  Category: String
});

var Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;
