var app = angular.module('GhFp', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
    	  controller:  'main',
          templateUrl: 'src/html/views/main.html'
      })
      .when('/test', {
    	  controller:  function($scope, $location, $route) {
			    		    $scope.urlName = 'test';
			    		    $scope.getName = function() {
			    		   	 return $scope.name;
			    			 };
			    			 $scope.location_path = $location.path();
			    			 $scope.location_url = $location.url();
    	  				},
          templateUrl: 'src/html/views/test.html'
      })
      .otherwise({redirectTo: '/'});
});

app.controller('main', function($scope) {
     $scope.accounts = [
                        	{ name: "Linkedin", url: "http://pl.linkedin.com/pub/rados%C5%82aw-go%C5%82%C4%99biewski/70/832/35/"},
                        	{ name: "G+", url: "https://google.com/+RadoslawGolebiewski"},
                        	{ name: "local test", url: "#/test"}
                    	];
});
