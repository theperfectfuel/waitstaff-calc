angular
	.module('myApp', [])
	.controller('myCtrl', function($scope) {
		$scope.title = "Waitstaff Calculator";

		$scope.resetMeal = function() {
			$scope.baseprice = '';
			$scope.taxrate = '';
			$scope.tippercentage = '';
		};

		$scope.resetAll = function() {
			$scope.meals = [];
			$scope.tipTotal = 0;
			$scope.avgTip = 0;
			$scope.subtotal = 0;
			$scope.tip = 0;
			$scope.total = 0;
			$scope.mealCount = 0;
			$scope.resetMeal();
		};

		$scope.resetAll();

		$scope.calculate = function() {
			var baseprice = $scope.baseprice;
			var taxrate = $scope.taxrate;
			var tippercentage = $scope.tippercentage;
			
			$scope.subtotal = baseprice + (baseprice * (taxrate / 100));
			$scope.tip =  baseprice * (tippercentage / 100);
			$scope.total = $scope.subtotal + $scope.tip;

			$scope.meals.push($scope.tip);
			var arrayLength = $scope.meals.length;
			console.log(arrayLength);
			console.log(typeof $scope.meals[arrayLength - 1]);

			$scope.tipTotal = ($scope.tipTotal + $scope.meals[arrayLength - 1]);
			console.log($scope.tipTotal);

			$scope.avgTip = $scope.tipTotal / $scope.meals.length;
			$scope.mealCount = $scope.meals.length;

		};
	});