var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: './home.html',
		controller: 'myCtrl'
	})
	.when('/new-meal', {
		templateUrl: './new-meal.html',
		controller: 'mealCtrl'
	})
	.when('/my-earnings', {
		templateUrl: './my-earnings.html',
		controller: 'earningsCtrl'
	})
	.otherwise('/');
}]);

myApp.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function() {
		$location.path('/home');
	});
});

myApp.service('myService', function() {
	
	var self = this;
	self.title = "Waitstaff Calculator";

	resetMeal = function() {
		baseprice = '';
		taxrate = '';
		tippercentage = '';
	};

	resetAll = function() {
		meals = [];
		tipTotal = 0;
		avgTip = 0;
		subtotal = 0;
		tip = 0;
		total = 0;
		mealCount = 0;
		resetMeal();
	};

	resetAll();

	calculate = function() {
		baseprice = baseprice;
		taxrate = taxrate;
		tippercentage = tippercentage;
		
		subtotal = baseprice + (baseprice * (taxrate / 100));
		tip =  baseprice * (tippercentage / 100);
		total = subtotal + tip;

		meals.push(tip);
		var arrayLength = meals.length;

		tipTotal = (tipTotal + meals[arrayLength - 1]);

		avgTip = tipTotal / meals.length;
		mealCount = meals.length;

	};
});

myApp.controller('homeCtrl', ['$scope', 'myService', function($scope, myService) {
	$scope.title = myService.title;
}]);

myApp.controller('myCtrl', ['$scope', 'myService', function($scope, myService) {

}]);

myApp.controller('mealCtrl', ['$scope', 'myService', function($scope, myService) {
	$scope.title = "Meal Details Page";
	myService.baseprice = $scope.baseprice;
	myService.taxrate = $scope.taxrate;
	myService.tippercentage = $scope.tippercentage;

	$scope.subtotal = myService.subtotal;
}]);

myApp.controller('earningsCtrl', ['$scope', 'myService', function($scope, myService) {
	$scope.title = "Earnings Page";
}]);