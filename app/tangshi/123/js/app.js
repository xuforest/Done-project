/**
 * Created by hxsd on 2016/5/11.
 */
    //创建模块
angular.module("ionicApp",["ionic"]);
//配置路由
angular.module("ionicApp").config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.position("bottom");
    $stateProvider.state("tabs",{url:"/tabs",abstract:true, templateUrl:"views/tabs/tabs.html"});
    $stateProvider.state("tabs.home",{url:"/home",views:{"rates-tab":{templateUrl:"views/home/home.html"}}});
    $stateProvider.state("tour",{url:"/tour",templateUrl:"views/tour/tour.html", controller:"tourController"});
    $stateProvider.state("tabs.reservation",{url:"/reservation",views:{"rates-tab":{templateUrl:"views/reservation/reservation.html", controller:"reservationController"}}});
    $stateProvider.state("tabs.cont",{url:"/cont",views:{"history-tab":{templateUrl:"views/cont/cont.html"}}});
    $stateProvider.state("tabs.shi",{url:"/shi",views:{"currencies-tab":{templateUrl:"views/shi/shi.html"}}});
    $stateProvider.state("tabs.weather",{url:"/weather",views:{"rates-tab":{templateUrl:"views/weather/weather.html", controller:"weatherController"}}})
    $stateProvider.state("tabs.restaurants",{url:"/restaurants", views:{"rates-tab":{templateUrl:"views/restaurants/restaurants.html"}}});
    //默认首页
    $urlRouterProvider.otherwise("/tabs/home")
    $urlRouterProvider.otherwise("/tour")

})