var taskModel = require('./tasksModel.js')
var Q = require('q');

module.exports = {  
  extract: function(req, res, day, next) {
    console.log("... extracting tasks from ...", day)

    // iterate through the entire day
    for (var i = 0; i < day.length; i++) {
      // add that task to a task collection
      console.log(day[i])
      var newTask = new taskModel({
        Name: day[i].name,
        Frequency: 1,
        Weight: day[i].weight
      });
      newTask.save( function(err, newTask) {
        if (err) {
          res.send(500, err);
        } else {
          res.status(newTask).send(newTask.body);
        }
      })
    }
  }
};
