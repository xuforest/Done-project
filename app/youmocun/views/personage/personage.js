/**
 * Created by hxsd on 2016/5/14.
 */

//创建一个控制器
angular.module("ionicApp")
    .controller("personageController",function($scope){
        $scope.data = {
            email:"",
            password:""

        };

        //  方法
        $scope.doSomething = function(){
            alert($scope.data.email + "," + $scope.data.password);

        };
    });

