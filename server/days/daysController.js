var dayModel = require('./daysModel.js')

module.exports = {
  sayHello: function(req, res, next) {
    console.log("...got to the day controller");

    var newDay = new dayModel({
        Tasks: req.body
    });
    newDay.save(function (err, newDay) {
      if (err) {
        res.send(500, err);
      } else {
        res.status(newDay).send(newDay.body);
      }
    });
  }
}
