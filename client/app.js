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
      parent: 'home',
      templateUrl: 'views/tasks.html',
      controller: 'tasksCtrl'
    });
});

app.controller('tasksCtrl', function($scope) {
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

  $scope.save = function ($HTTP) {
    console.log('saving day...');
    return $http({
      method: 'POST',
      url:'/save',
      data: $scope.tasks
    })
    .then(function (resp){
      return resp;
    })
  }
});
