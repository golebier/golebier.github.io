var app = angular.module('GhFp', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
    	  controller:  'main',
          templateUrl: 'src/html/views/main.html'
      })
      .when('/test', {
    	  controller:  'main',
          templateUrl: 'src/html/views/main.html'
      })
      .otherwise({redirectTo: '/'});
});

app.controller('main', function($scope, $routeParams, $http) {
     $scope.url_name = "test";
});
