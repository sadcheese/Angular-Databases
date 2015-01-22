var App = angular.module('App', ['ngRoute']);
App.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'postCtrl',
		templateUrl : 'posts.html'
	});
});


App.controller('comtCtrl', ['$scope', '$http',
function($scope, $http) {
	$http.get('data/posts.json').success(function(data) {
		
		$scope.comments = data;

	});

	$http.get('data/users.json').success(function(data) {
		$scope.users = data;
	});

}]);
App.controller('postCtrl', ['$scope', '$http',
function($scope, $http) {
	$http.get('data/posts.json').success(function(data) {
		$scope.posts = data;

	});

	$http.get('data/users.json').success(function(data) {
		$scope.users = data;
	});

}]);

App.controller('userCtrl', ['$scope', '$http',
function($scope, $http) {


	$http.get('data/users.json').success(function(data) {
		$scope.users = data;
		$scope.loggedID = 5;
	});

}]);