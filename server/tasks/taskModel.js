var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  name: String,
  frequency: Number,
  weight: String
});

var Task = mongoose.model('Task', TaskSchema);

TaskSchema.pre('save', function (next) {
  next();
});

module.exports = Task;
