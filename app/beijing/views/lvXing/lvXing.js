/**
 * Created by Administrator on 2016/5/15.
 */


//注册控制器
angular.module("ionicApp").controller("listCtrl", function ($scope,$http) {
    $scope.items=[
        {name:"可乐",description:"可口的1"},
        {name:"可乐",description:"可口的2"},
        {name:"可乐",description:"可口的3"},
        {name:"可乐",description:"可口的4"}
    ];
    //响应下拉刷新的函数，向服务器请求新数据
    $scope.doRefresh = function () {
        $http.get("data.json").success(function (data) {
            $scope.items=data;
        }).finally(function () {
            //通知框架，下拉刷新结束
            $scope.$broadcast("scroll.refreshComplete");
        })
    }


})