var myapp = angular.module('myapp',[]);

myapp.controller('MyCtrl',['$scope',function($scope){
	$scope.ctrlFlavor = "百威";
}]);
myapp.directive('drink',function(){
	return {
		restrict:'AE',
		scope:{
			flavor:'='
		},
		template:'<input type="text" ng-model="flavor" />'
	}
});
