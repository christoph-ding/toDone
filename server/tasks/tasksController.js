var taskModel = require('./taskModel.js')
var Q = require('q');

module.exports = {  
  extract: function(req, res, day, next) {
    console.log("... extracting tasks from ...", day)

    var findAllEat = Q.nbind(taskModel.find, taskModel);

    findAllEat({'name' : 'eat'})
      .then(function (tasks) {
        res.send(tasks);
      })
      .fail(function (error) {
        next(error);
      })
    // var query = Person.findOne({ 'name.last': 'Ghost' });

    // // selecting the `name` and `occupation` fields
    // query.select('name occupation');

    // // execute the query at a later time
    // query.exec(function (err, person) {
    //   if (err) return handleError(err);
    //   console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
    // })


    // iterate through the entire day
    // for (var i = 0; i < day.length; i++) {
    //   // add that task to a task collection
    //   console.log(day[i])
    //   var newTask = new taskModel({
    //     Name: day[i].name,
    //     Frequency: 1,
    //     Weight: day[i].weight
    //   });
    //   newTask.save( function(err, newTask) {
    //     if (err) {
    //       res.send(500, err);
    //     } else {
    //       res.status(newTask).send(newTask.body);
    //     }
    //   })
    // }
  }
};
