var daysController = require('./daysController.js');

module.exports = function (app) {
  app.route('/')
    .post(daysController.sayHello)
}
