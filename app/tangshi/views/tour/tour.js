/**
 * Created by hxsd on 2016/5/12.
 */
angular.module("ionicApp").controller("tourController",function($scope,$ionicSlideBoxDelegate){
    $scope.isShow = false;
//监听on-slide-change事件
    $scope.onSlideChenged = function(index){
        if(index == $ionicSlideBoxDelegate.slidesCount()-1){
            $scope.isShow =true
        }else{
            $scope.isShow = false;
        }
    }


})