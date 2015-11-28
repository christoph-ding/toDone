var tasksController = require('./tasksController.js');

module.exports = function (app) {
  app.route('/')
    .post(tasksController.sayHello);
}
