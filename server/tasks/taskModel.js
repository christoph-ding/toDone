var mongoose = require('mongoose');
var userModel = require('../users/userModel.js')

var TaskSchema = new mongoose.Schema({
  name: String,
  frequency: Number,
  weight: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

var Task = mongoose.model('Task', TaskSchema);

TaskSchema.pre('save', function (next) {
  next();
});

module.exports = Task;
