/**
 * Created by Administrator on 2016/5/15.
 */
    // 定义history model，显示在select上。默认是美元

angular.module("ionicApp").controller("detailController", function ($scope,$stateParams) {
    //解析从url传过来的参数->货币代码
    $scope.email = $stateParams.email;


})