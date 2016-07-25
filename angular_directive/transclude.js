var myapp = angular.module('myapp',[]);

myapp.directive('hello',function(){
	return {
		restrict:'AE',
		transclude:true,
		template:'<div>Hello everyone!<div ng-transclude></div></div>'
	}
});
