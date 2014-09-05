var app = angular.module('angularjs-starter', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
    	  controller:  'main',
          templateUrl: 'src/html/views/main.html'
      })
      .otherwise({redirectTo: '/'});
});


app.controller('main', function($scope, $routeParams, $http) {
     $scope.items = [];
});
