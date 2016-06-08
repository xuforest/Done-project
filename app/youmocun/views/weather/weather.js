/**
 * Created by hxsd on 2016/5/11.
 */
angular.module("ionicApp").controller("weatherController",function($scope,$http,$ionicLoading){
    var directions = ["北风","东北风","东风","东南风","南风","西南风","西风","西北风"]
    var url = "http://wthrcdn.etouch.cn/weather_mini?city=北京";
    $ionicLoading.show();
    $http.get(url).success(function(data){
        $scope.weather = data;
        $ionicLoading.hide();
    }).error(function(err){
        //  如果有错误，使用loader显示一个消息，并3秒后关闭
        $ionicLoading.show({
            template:"无法加载天气数据。请稍后再试",
            duration:3000
        });

    });
   //   计算风向。将度数转为数组中表示的方向（这可能用AngularJS过滤器更合适）
    $scope.getDirection = function(degree){
        if(degree>338){
            degree = 360 - degree;
        }
        var index = Math.floor((degree + 22)/45);
        return directions[index];
    }
});