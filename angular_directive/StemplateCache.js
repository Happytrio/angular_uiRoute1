var myModule = angular.module("myapp",[]);

myModule.run(function($templateCache){
	$templateCache.put("hello.html","<div>Hello everyone!!!</div>");
});

myModule.directive("hello",function($templateCache){
	return {
		restrict:'AECM',
		template:$templateCache.get("hello.html"),
		replace:true
	}
});
