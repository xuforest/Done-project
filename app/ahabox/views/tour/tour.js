/**
 * Created by hxsd on 2016/4/23.
 */
angular.module("ionicApp").controller("tourController",function($scope,$ionicSlideBoxDelegate){
        $scope.isShow=false;
        //监听on-slide-changed的事件
        $scope.onSlideChanged=function(index){
            if(index == $ionicSlideBoxDelegate.slidesCount()-1){
                $scope.isShow=true;
            }else {
                $scope.isShow=false;
            }
        }
    })
