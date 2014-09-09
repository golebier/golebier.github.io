var app = angular.module('GhFp', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
    	  controller:  'main',
          templateUrl: 'src/html/views/main.html'
      })
      .otherwise({redirectTo: '/'});
});

app.controller('main', function($scope, $location, $route) {
     $scope.data = [{ urlName: 'test', location_path: $location.path(),
    	 location_url: $location.url(), route_current_templateUrl: $route.current.templateUrl,
    	 route_current_params: $route.current.params, route_current_scope_name: $route.current.scope.name}];
});
