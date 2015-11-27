var app = angular.module('app', [
  'ui.router'
])

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home/tasks');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state('home.tasks', {
      url: '/tasks',
      templateUrl: 'views/tasks.html',
      controller: 'tasksCtrl'
    })
    .state('home.signin', {
      url: '/signin',      
      templateUrl: 'views/signin.html',
      controller: 'signinCtrl'
    });
});

// Tasks Page Controller
app.controller('tasksCtrl', function ($scope, $http) {
  $scope.tasks = [];

  $scope.addTask = function () {
    var currentTask = {};
    currentTask.name = $scope.task.name;    
    currentTask.weight = $scope.task.weight;
    $scope.tasks.push(currentTask);
    console.log(currentTask, '        ', $scope.tasks);
  }

  $scope.deleteTask = function (index) {    
    $scope.tasks.splice(index, 1);
  }

  $scope.save = function () {
    console.log('saving day...');
    return $http({
      method: 'POST',
      url:'api/save',
      data: $scope.tasks
    })
    .then(function (resp) {
      return resp;
    })
  }
});

// Signin Page Controller
app.controller('signinCtrl', function ($scope, $http) {
  $scope.signin = function() {
    console.log('username is     ', $scope.user.username);
    console.log('password is     ', $scope.user.password);    
  }
});
