var taskModel = require('./taskModel.js')
var Q = require('q');
var Promise = require('bluebird');

module.exports = {  
  extract: function(req, res, day, next) {
    
    var createTask = Q.nbind(taskModel.create, taskModel);
    var checkTask = Q.nbind(taskModel.find, taskModel);

    for (var i = 0; i < day.length; i++) {
      var currentTask = day[i];      
      // check if the current tasks exists
      checkTask({name: currentTask.name})
        .then(function (match) {
          if (match.length > 0) {
            console.log('match for', match);            
          } else {
            console.log('no match for ', currentTask);
          }
        })
        .fail(function (error) {
          console.log('error on ', currentTask);          
        });
      // var newTask = {
      //   name: day[i].name,
      //   frequency: 1,
      //   weight: day[i].weight
      // };
      // createTask(newTask)      
      // .fail(function (error) {
      //   console.log('error ', i);
      // });
    }
  }
};
    //   var checkTask = Q.nbind(taskModel.find, taskModel);
    //   checkTask({})
    //     .then(function (results) {
    //       if (results) 
    //       // if this task does not already exists, add it
    //       console.log('searching for ', day[i].name, '    found ', results)
    //       if (results.length === 0) {      
          // add that task to a task collection
          //   console.log('adding...  ', day[i].name);
    //       }
    //     })
    //     .fail(function (error) {
    //       console.log("encountered error! ", i)          
    //     })
    // }

      // newTask.save(function (err, newTask) {
      //   if (err) {
      //     res.send(500, err);
      //   } else {
      //     res.status(newTask).send(newTask.body);
      //   }
      // })
