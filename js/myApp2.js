angular
	.module('myApp', [])
	.controller('myCtrl', function($scope) {
		$scope.title = "Waitstaff Calculator";
		$scope.meals = [];

		$scope.getTipTotal = function() {
			var arrayLength = $scope.meals.length;
			var tipTotal = 0;

			for (var i = 0; i < arrayLength; i++) {
				tipTotal = tipTotal + $scope.meals[i];
			}
			return tipTotal;
		};

		$scope.getAvgTip = function() {
			var tipTotal = getTipTotal();
			var avgTip = tipTotal / $scope.meals.length;
			return avgTip;
		};

		$scope.calculate = function() {
			var baseprice = $scope.baseprice;
			var taxrate = $scope.taxrate;
			var tippercentage = $scope.tippercentage;

			$scope.subtotal = baseprice + (baseprice * (taxrate / 100));
			$scope.tip =  baseprice * (tippercentage / 100);
			$scope.total = $scope.subtotal + $scope.tip;

			$scope.meals.push($scope.tip);

			$scope.tipTotal = getTipTotal();
			$scope.avgTip = getAvgTip();
			$scope.mealCount = $scope.meals.length;

		};
	});