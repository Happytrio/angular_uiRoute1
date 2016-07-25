var myModule = angular.module("myapp",[]);

myModule.directive("hello",function(){
	return {
		restrict:'AEMC',
		template:'<div>Hi everyone!</div>',
		replace:true
	}
});
