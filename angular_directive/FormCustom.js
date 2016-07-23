var myapp = angular.module('myapp',[]);

myapp.directive('contenteditable',function(){
	return {
		require:'ngModel',
		link:function(scope,elm,attrs,ctrl) {
			elm.bind('keyup',function(){
				scope.$apply(function(){
					ctrl.$setViewValue(elm.text());
				});
			});
			ctrl.$render = function(){
				elm.html(ctrl.$viewValue);
			};
			ctrl.$setViewValue(elm.html());
		}
	}
});
