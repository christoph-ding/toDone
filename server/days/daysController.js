var dayModel = require('./dayModel.js')
var taskModel = require('../tasks/taskModel.js')
var tasksController = require('../tasks/tasksController.js')
// var Q = require('q');

module.exports = {

  // handle a new day
  handleDay: function (req, res) {
    // first extract the tasks, add them to bank
    var currentDay = req.body;
    tasksController.extract(req, res, currentDay);
  },

  sayHello: function(req, res, next) {
    var newDay = new dayModel({
        Tasks: req.body
    })
    newDay.save(function (err, newDay) {
      if (err) {
        res.send(500, err);
      } else {
        res.status(newDay).send(newDay.body);
      }
    });
  }
}
