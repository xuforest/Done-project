/**
 * Created by Administrator on 2016/5/15.
 */
angular.module("ionicApp").controller("gonglueCtrl",function($scope,$http,$ionicLoading){
    var url="data.json";
    $ionicLoading.show();  // 显示加载指示器
    $http.get(url).success(function(data){
        $scope.datas = data;
        console.log(data);
        $ionicLoading.hide();
    }).error(function(err){
        // 如果有错误，使用loader显示一个消息，并3秒钟后关闭
        $ionicLoading.show({
            template:"无法加载数据，请稍后再试",
            duration:3000
        });
    });
});