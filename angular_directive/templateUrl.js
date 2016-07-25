var myapp = angular.module('myapp',[]);

myapp.directive('hello',function(){
	return {
		restrict:'AECM',
		templateUrl:'hello.html',
		replace:true
	}
});
