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
     $scope.url_name = "test";
     $scope.location_path = $location.path();
     $scope.location_url = $location.url();
     $scope.route_current_templateUrl = $route.current.templateUrl;
     $scope.route_current_params = $route.current.params;
     $scope.route_current_scope_name = $route.current.scope.name;
     $$scope.routeParams = routeParams;
});
