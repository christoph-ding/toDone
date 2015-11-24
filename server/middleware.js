// middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  // routers

  // logging
  app.use(morgan('dev'));

  // serve static files
  app.use(express.static('../client'))

};
