/**
 * Created by hxsd on 2016/5/13.
 */

angular.module("ionicApp").controller('homeController', function($scope, $ionicSlideBoxDelegate) {
    //为了验证属性active-slide定义的模型，angularjs是mvc模式
    $scope.model = {
        activeIndex:0
    };

    //此事件对应的是pager-click属性，当显示图片是有对应数量的小圆点，这是小圆点的点击事件
    $scope.pageClick = function(index){
        $scope.model.activeIndex = index;
    };

    //当图片切换后，触发此事件，注意参数
    $scope.slideHasChanged = function(index){
        console.log(index);
    };

    //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
    $scope.delegateHandle = $ionicSlideBoxDelegate;
});