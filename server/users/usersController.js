var userModel = require('./userModel.js');
var Q = require('q');

module.exports = {
  sayHello: function(req, res) {
    console.log('made it to usersController! and the user is ', req.body);    
    var username = req.body.username;
    var password = req.body.password;

    // add to see if user already exists
    userModel.find({username: username}, function (err, match) {
      if (err) {        
        res.send(500, err);
      } else if (match.length === 0) { // add user
        var newUser = new userModel({
          username: username,
          password: password
        })
        newUser.save(function (err, newUser) {
          if (err) {
            console.log('there was an error adding ', user.username, ' ...');
          } else {
            res.send();        
          }        
        })
      };
    })
  }
}
