angular.module('app', [
  'ui.router',
  'tasks'
])

.config(function ($stateProvider, $urlRouterProvider) {
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
    });
});
