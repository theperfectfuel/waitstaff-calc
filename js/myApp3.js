angular
	.module('myApp', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/home', {
			templateUrl: './home.html',
			controller: 'myCtrl'
		})
		.when('/new-meal', {
			templateUrl: './new-meal.html',
			controller: 'myCtrl'
		})
		.when('/my-earnings', {
			templateUrl: './my-earnings.html',
			controller: 'myCtrl'
		})
		.otherwise('/home');
	}])
	.run(function($rootScope, $location) {
		$rootScope.$on('$routeChangeError', function() {
			$location.path('/home');
		});
	})
	.factory('myFactory', function() {

		return {
			data: {
			title: "Waitstaff Calculator",
			baseprice: '',
			taxrate: '',
			tippercentage: '',
			meals: [],
			tipTotal: 0,
			avgTip: 0,
			subtotal: 0,
			tip: 0,
			total: 0,
			mealCount: 0
			}
		}	
	})
	.service('myService', function(myFactory) {
		
	})
	.controller('myCtrl', function($scope, myFactory, myService) {

		$scope.setScopeVars = function() {
			$scope.title = myFactory.data.title;
			$scope.baseprice = myFactory.data.baseprice;
			$scope.taxrate = myFactory.data.taxrate;
			$scope.tippercentage = myFactory.data.tippercentage;
			$scope.subtotal = myFactory.data.subtotal;
			$scope.tip = myFactory.data.tip;
			$scope.total = myFactory.data.total;
			$scope.tipTotal = myFactory.data.tipTotal;
			$scope.avgTip = myFactory.data.avgTip;
			$scope.mealCount = myFactory.data.mealCount;
			$scope.meals = myFactory.data.meals;
		};

		$scope.setFactoryVars = function() {
			myFactory.data.baseprice = $scope.baseprice;
			myFactory.data.taxrate = $scope.taxrate;
			myFactory.data.tippercentage = $scope.tippercentage;
			myFactory.data.subtotal = $scope.subtotal;
			myFactory.data.tip = $scope.tip;
			myFactory.data.total = $scope.total;
			myFactory.data.tipTotal = $scope.tipTotal;
			myFactory.data.avgTip = $scope.avgTip;
			myFactory.data.mealCount = $scope.mealCount;
			myFactory.data.meals = $scope.meals;
		};

		$scope.resetMeal = function() {
			$scope.baseprice = '';
			$scope.taxrate = '';
			$scope.tippercentage = '';
			$scope.subtotal = 0;
			$scope.tip = 0;
			$scope.total = 0;
			$scope.setFactoryVars();
		};

		$scope.resetAll = function() {
			$scope.meals = [];
			$scope.tipTotal = 0;
			$scope.avgTip = 0;
			$scope.mealCount = 0;
			$scope.resetMeal();
		};

		$scope.setScopeVars();

		$scope.calculate = function() {
			
			$scope.setFactoryVars();
			
			$scope.subtotal = myFactory.data.baseprice + (myFactory.data.baseprice * (myFactory.data.taxrate / 100));
			$scope.tip =  myFactory.data.baseprice * (myFactory.data.tippercentage / 100);
			$scope.total = $scope.subtotal + $scope.tip;

			myFactory.data.meals.push($scope.tip);
			var arrayLength = myFactory.data.meals.length;

			$scope.setFactoryVars();

			$scope.tipTotal = ($scope.tipTotal + myFactory.data.meals[arrayLength - 1]);

			$scope.avgTip = $scope.tipTotal / myFactory.data.meals.length;
			$scope.mealCount = myFactory.data.meals.length;
			console.log($scope.avgTip, $scope.mealCount, $scope.tipTotal);

			$scope.setFactoryVars();

		};
	});