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
    	 route_current_params: $route.current.params}];
     $scope.accounts = [{ name: "Linkedin", url: "http://pl.linkedin.com/pub/rados%C5%82aw-go%C5%82%C4%99biewski/70/832/35/"},
                        { name: "G+", url: "https://google.com/+RadoslawGolebiewski"}];
});
