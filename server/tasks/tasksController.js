var taskModel = require('./taskModel.js')
var Q = require('q');
var Promise = require('bluebird');

module.exports = {  
  extract: function(req, res, day, next) {
    // use Promise.map to handle async calls on tasks in 'day'

    Promise.map(day, function(task) {      
      // check if the current tasks exists      
      console.log('current task is ', task.name);
      taskModel.find({name: task.name}, function (err, match) {
        if (err) { // error
          res.send(500, err);
        } else if (match.length === 0) {
          var newTask = new taskModel({
            name: task.name,
            frequency: 1,
            weight: task.weight,
            postedBy: task.user._id              
          })
          newTask.save(function (err, newTask) {
            if (err) {
              console.log(err);
              console.log('there was an error adding ', task.name, ' ... ');                 
            } else {
              console.log('there was no error adding ', task.name, ' ... ');               
            }
          });
        }        
      })
    }).then(function() {
      console.log("done...sending response");
      next();    
    });
  }  
};
