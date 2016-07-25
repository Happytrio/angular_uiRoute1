var myapp = angular.module('myapp',[]);

myapp.directive('hello',function(){
	return {
		restrict:'AE',
		link:function(scope,ele,attrs){
			ele.bind('mouseenter',function(event){
				console.log("鼠标进入...");
			});
			ele.bind('mouseout',function(event){
				console.log("鼠标移出...");
			});
		}
	}
});
