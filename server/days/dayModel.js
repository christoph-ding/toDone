var mongoose = require('mongoose');
var userModel = require('../users/userModel.js')

var DaySchema = new mongoose.Schema({
  Tasks: Array,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

var Day = mongoose.model('Day', DaySchema);

DaySchema.pre('save', function (next) {
  next();
});

module.exports = Day;
