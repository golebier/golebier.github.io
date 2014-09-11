var app = angular.module('GhFp', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
    	  controller:  'main',
          templateUrl: 'src/html/views/main.html'
      })
      .when('/test', {
    	  controller:  'test',
          templateUrl: 'src/html/views/test.html'
      })
      .otherwise({redirectTo: '/'});
});

app.controller('main', function($scope) {
     $scope.accounts = [{ name: "Linkedin", url: "http://pl.linkedin.com/pub/rados%C5%82aw-go%C5%82%C4%99biewski/70/832/35/"},
                        { name: "G+", url: "https://google.com/+RadoslawGolebiewski"},
                        { name: "local test", url: "#/test"}];
});

app.controller('test', function($scope, $location, $route) {
     $scope.data = [{ urlName: 'test'}];
});
