var taskModel = require('./taskModel.js')
var Q = require('q');

module.exports = {  
  extract: function(req, res, day, next) {
    
    for (var i = 0; i < day.length; i++) {
      
      console.log('making ', day[i].name)
      var createTask = Q.nbind(taskModel.create, taskModel);
      var newTask = {
        name: day[i].name,
        frequency: 1,
        weight: day[i].weight
      };
      createTask(newTask);
      }




      // newTask.save(function (err, newTask) {
      //   if (err) {
      //     res.send(500, err);
      //   } else {
      //     res.status(newTask).send(newTask.body);
      //   }
      // })
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
