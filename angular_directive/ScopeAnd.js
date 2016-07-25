var myapp = angular.module('myapp',[]);

myapp.controller('MyCtrl',['$scope',function($scope){
	$scope.sayHello = function(name){
		alert('Hello '+name);
	}
}]);
myapp.directive("greeting",function(){
	return {
		restrict:'AE',
		scope:{
			greet:'&'
		},
		template:'<input type="text" ng-model="userName" /><br />'+'<button class="btn btn-default" ng-click="greet({name:userName})">Greeting</button><br />'
	}
});
/*
 & 方式提供一种途经是 directive 能在父 scope 的上下文中执行一个表达式。此表达式可以是一个 function。
比如当你写了一个 directive，当用户点击按钮时，directive 想要通知 controller，controller 无法知道 directive 中发生了什么，也许你可以通过使用 angular 中的 event 广播来做到，但是必须要在 controller 中增加一个事件监听方法。
最好的方法就是让 directive 可以通过一个父 scope 中的 function，当 directive 中有什么动作需要更新到父 scope 中的时候，可以在父 scope 上下文中执行一段代码或者一个函数。
 */
