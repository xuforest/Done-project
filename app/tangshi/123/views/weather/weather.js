/**
 * Created by hxsd on 2016/5/11.
 */
/*
angular.module("ionicApp").controller("weatherController",function($scope,$http,$ionicLoading){
 var directions = ["北风","东北风","东风","东南风","南风","西南风","西风","西北风"];
    var url = "http://wthrcdn.etouch.cn/weather_mini?city=北京";
    $ionicLoading.show();
    $http.get(url).success(function(data){
        $scope.weather = data;
        $ionicLoading.hide();
    }).error(function(err){
        $ionicLoading.show({
            template:"无法加载",
            duration:3000
        })
    });


    $scope.getDirection = function(degree){
        if(degree>338){
            degree = 360-degree;
        }
        var index = Math.floor((degree + 22)/45);
        return directions[index];
    }
})
*/
