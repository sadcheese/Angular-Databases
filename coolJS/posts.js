/**
 * @author Sam
 */

App.controller('postCtrl', ['$scope', '$http',
function($scope, $http) {
	$http.get('data/posts.json').success(function(data) {
		$scope.posts = data;

	});

	$http.get('data/users.json').success(function(data) {
		$scope.users = data;
	});

}]);
