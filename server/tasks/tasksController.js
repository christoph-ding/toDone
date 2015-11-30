var taskModel = require('./taskModel.js');
var userModel = require('../users/userModel.js');
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
          res.sendStatus(500);
        } else if (match.length === 0) {
          var findUser = Q.nbind(userModel.findOne, userModel);
          findUser({username: task.postedBy})
            .then(function (foundUser) {
              if (!foundUser) {
                console.log('this user does not exist!')
              } else {
                  console.log('foundUser ID is ', foundUser._id)
                  var newTask = new taskModel({
                    name: task.name,
                    frequency: 1,
                    weight: task.weight,
                    postedBy: foundUser._id            
                  })
                  newTask.save(function (err, newTask) {
                    if (err) {
                      console.log('there was an error adding ', task.name, ' ... ');
                    } else {
                      console.log('there was no error adding ', task.name, ' ... ');               
                    }
                  });
                }
              })
            }
          })
        .then(function() {
          console.log("done...sending response");
          res.sendStatus(200);    
          });
    });  
  }
};
