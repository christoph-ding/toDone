var dayModel = require('./dayModel.js');
var taskModel = require('../tasks/taskModel.js');
var userModel = require('../users/userModel.js');
var tasksController = require('../tasks/tasksController.js');
var Q = require('q');

module.exports = {

  // handle a new day
  handleDay: function (req, res) {
    // first extract the tasks, add them to bank    
    var Tasks = req.body.Tasks
    var postedBy = req.body.postedBy

    tasksController.extract(req, res, Tasks, function () {    
      var findUser = Q.nbind(userModel.findOne, userModel);
      findUser({username: postedBy})
        .then (function (foundUser) {
          if (!foundUser) {
            console.log('this user does not exist!')
          } else {      
            var newDay = new dayModel({
                Tasks: Tasks,
                postedBy: postedBy
              })
            newDay.save(function (err, newDay) {
              if (err) {
                console.log(err)
                res.status(500).send(err);
              } else {
                console.log('saving the day');
                res.end();
              }
            })
          };
        });
      });
  }
}
