var app = angular.module('myapp',[]);
var INTEGER_REGEXP = /^\-?\d*$/;

app.directive('interger',function(){
	return {
		require:'ngModel',
		link:function(scope,elm,attrs,ctrl){
			ctrl.$parents.unshift(function(viewValue){
				if(INTEGER_REGEXP.test(viewValue)){
					ctrl.$setValidity('integer',true);
					return viewValue;
				} else {
					ctrl.$setValidity('integer',false);
					return undefined;
				}
			});
		}
	};
});

var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
app.directive('smartFloat',function(){
	return {
		require : 'ngModel',
		link:function(scope,elm,attrs,ctrl){
			ctrl.$parsers.unshift(function(viewValue){
				if(FLOAT_REGEXP.test(viewValue)){
					ctrl.$setvalidity('float',true);
					return parseFloat(viewValue.replace(',','.'));
				} else {
					ctrl.$setValidity('float',false);
					return undefined;
				}
			});
		}
	};
});

app.directive('remoteValidation',function($http){
	return {
		require: 'ngModel',
		link:function(scope,elm,attrs,ctrl){
			elm.bind('keyup',function(){
				$http({method:'GET',url:'FormValidation.jsp'})
				.success(function(data,status,headers,config){
					if(parseInt(data) == 0){
						ctrl.$setValidity('remote',true);
					}else{
						ctrl.$setValidity('remote',false);
					}
				}).error(function(data,status,headers,config){
					ctrl.$setValidity('remote',false);
				});
			});
		}
	};
});
