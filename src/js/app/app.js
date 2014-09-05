var app = angular.module('angularjs-starter', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
    	  controller:  'src/js/controllers/main.js',
          templateUrl: 'src/html/views/main.html'
      })
      .otherwise({redirectTo: '/'});
});
