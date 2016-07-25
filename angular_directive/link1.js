var myapp = angular.module('myapp',[]);

myapp.directive('hello',function(){
	return {
		restrict:"AE",
		link:function(scope,ele,attrs){
			console.log(ele);
			ele.bind('mouseenter',function(){
				console.log("鼠标进入...");
			});
			ele.bind('mouseout',function(){
				console.log("鼠标移出...");
			});
		}
	}
});
