/**
 * Created by hxsd on 2016/5/11.
 */
angular.module("ionicApp").controller("reservationController",function($scope){
    $scope.reservation = {
        checkin:new Date(), //  入住时间
        checkout:new Date(Date.now() + 1000* 60 * 60 * 24 * 7), // 退房时间
        room:303,   // 房间号
        rate:128,   // 房费
        wifi:"resortwifi"   // wifi
    };
});