var myapp = angular.module('myapp',[]);

myapp.directive('hello',function(){
	return {
		restrict:'AE',
		template:'<div>Hello everyone!</div>',
		replace:true
	}
});
