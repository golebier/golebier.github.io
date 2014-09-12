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
			    			$scope.location_path = $location.path();
			    			$scope.location_url = $location.url();

			    		    $scope.getName = function() {
			    		   	 	return $scope.name;
			    			};
			    		    $scope.getNameWith = function(addThis) {
			    		   	 	return $scope.name + addThis;
			    			};
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

app.controller('TextAreaWithLimitCtrl', function($scope) {
	var MAX_LEN = 128;
	var WARN_THRESHOLD = 120;
	// TODO 3 steps colored info, by font or text background;
	// TODO clear, add cleaning
	// TODO then use clean just for tests
	// TODO cut more then valid
	$scope.remaining = function () {
		return MAX_LEN - $scope.message.length;
	};

	$scope.hasValidLength = function () {
		return $scope.remaining() > 0;
	};

	$scope.shouldWarn = function () {
		return $scope.remaining() < WARN_THRESHOLD;
	};
});
