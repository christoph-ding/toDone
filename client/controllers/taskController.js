angular.module('tasks', [])

.controller('tasksCtrl', function($rootScope, $scope) {
  $rootScope.tasks = [];

  $scope.addTask = function () {
    
    console.log(currentTask);
  }
});
