// middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path')

module.exports = function(app, express) {
  // define routers
  var tasksRouter = express.Router();
  var daysRouter = express.Router();

  // tasks Router
  // app.use('/api/save', tasksRouter);
  // require('./tasks/tasksRouter.js')(tasksRouter);

  // days Router
  app.use('/api/save', bodyParser.json(), daysRouter);
  require('./days/daysRouter.js')(daysRouter);

  // logging
  app.use(morgan('dev'));

  // serve static files
  app.use(express.static((__dirname + '/../client')))
};
