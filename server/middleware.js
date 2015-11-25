// middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  // define routers
  var tasksRouter = express.Router()

  // tasks Router
  app.use('/home/tasks', tasksRouter);
  require('./tasks/tasksRouter.js')(tasksRouter);

  // logging
  app.use(morgan('dev'));

  // serve static files
  app.use(express.static('../client'))

};
