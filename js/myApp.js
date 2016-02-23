angular
	.module('myApp', [])
	.controller('myCtrl', function($scope) {
		$scope.title = "Waitstaff Calculator";

		$scope.calculate = function() {
			console.log(myForm);
		};
	});