var usersController = require('./usersController.js')

module.exports = function (app) {
  app.route('/signup')
    .post(usersController.signUp);
  app.route('/signin')
    .post(usersController.signIn);
}
