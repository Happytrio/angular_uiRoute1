var appModule = angular.module('myapp',[]);

appModule.controller("TestFormModule",function($scope){
	$scope.user = {
		userName:'Happytrio',
		password:''
	};
	$scope.save = function(){
		alert("保存数据!");
	}
});
