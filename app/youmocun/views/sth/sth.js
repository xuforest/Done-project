/**
 * Created by hxsd on 2016/5/14.
 */
angular.module("ionicApp").controller("sthController",function($scope,$http,$ionicLoading){

    var url = "sth.json";
    $ionicLoading.show();
    $http.get(url).success(function(data){
        $scope.weather = data;
        $ionicLoading.hide();
    }).error(function(err){
        //  如果有错误，使用loader显示一个消息，并3秒后关闭
        $ionicLoading.show({
            template:"无法加载数据。请稍后再试",
            duration:3000
        });

    });

});



