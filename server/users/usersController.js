var userModel = require('./userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');

module.exports = {
  signUp: function (req, res) {
    console.log('made it to usersController! and the user is ', req.body);    
    var username = req.body.username;
    var password = req.body.password;
    
    userModel.find({username: username}, function (err, match) {
      if (err) {        
        res.send(500, err);
      } else if (match.length > 0) {
        console.log('user ', username ,' already exists!');
        res.send();
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
  },

   signIn: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    userModel.find({username: username}, function (err, match) {
      if (err) {        
        res.send(500, err);
      } else if (match.length > 0) {
        console.log(username ,' found, password is ', match[0].password);
        if (password === match[0].password) {
          console.log('signed in!');
        //   var token = jwt.encode(user, 'secret');
        //   res.json({token: token});
        }
        res.send();
      } else if (match.length === 0) {
        console.log('sign up!')
        res.send();
      } 
    })
  }
}
