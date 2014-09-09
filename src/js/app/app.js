var app = angular.module('GhFp', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
    	  controller:  'main',
          templateUrl: 'src/html/views/main.html'
      })
      .otherwise({redirectTo: '/'});
});

app.controller('main', function($scope, $routeParams, $http) {
     $scope.data.url_name = "test";
     $scope.data.location_path = $location.path();
     $scope.data.location_url = $location.url();
     $scope.data.route_current_templateUrl = $route.current.templateUrl;
     $scope.data.route_current_params = $route.current.params;
     $scope.data.route_current_scope_name = $route.current.scope.name;
     $scope.data.routeParams = routeParams;
});
