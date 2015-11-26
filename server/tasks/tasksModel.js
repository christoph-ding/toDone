var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  Name: String,
  Frequency: Number,
  Category: String
});

var Task = mongoose.model('Task', TaskSchema);

TaskSchema.pre('save', function (next) {
  next();
});

module.exports = Task;
