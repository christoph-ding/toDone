var mongoose = require('mongoose');

var DaySchema = new mongoose.Schema({
  Tasks: Array
});

var Day = mongoose.model('Day', DaySchema);

DaySchema.pre('save', function (next) {
  next();
});

module.exports = Day;
