var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  Name: String,
  Frequency: Number,
  Weight: String
});

var Task = mongoose.model('Task', TaskSchema);

TaskSchema.pre('save', function (next) {
  next();
});

module.exports = Task;
