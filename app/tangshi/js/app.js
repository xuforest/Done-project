/**
 * Created by hxsd on 2016/5/11.
 */
    //创建模块
angular.module("ionicApp",["ionic"]);
//配置路由
angular.module("ionicApp").config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.position("bottom");
    $stateProvider.state("tabs",{url:"/tabs",abstract:true, templateUrl:"views/tabs/tabs.html"});
    $stateProvider.state("tabs.home",{url:"/home",views:{"rates-tab":{templateUrl:"views/home/home.html", controller:"homeController"}}});
    $stateProvider.state("tour",{url:"/tour",templateUrl:"views/tour/tour.html", controller:"tourController"});
    $stateProvider.state("tabs.reservation",{url:"/reservation",views:{"rates-tab":{templateUrl:"views/reservation/reservation.html"}}});
    $stateProvider.state("tabs.home2",{url:"/home2",views:{"rates-tab":{templateUrl:"views/home2/home2.html"}}});
    $stateProvider.state("tabs.home4",{url:"/home4",views:{"rates-tab":{templateUrl:"views/home4/home4.html"}}});
    $stateProvider.state("tabs.home5",{url:"/home5",views:{"rates-tab":{templateUrl:"views/home5/home5.html"}}});
    $stateProvider.state("tabs.home6",{url:"/home6",views:{"rates-tab":{templateUrl:"views/home6/home6.html"}}});
    $stateProvider.state("tabs.cont",{url:"/cont",views:{"history-tab":{templateUrl:"views/cont/cont.html"}}});
    $stateProvider.state("tabs.ts1",{url:"/ts1",views:{"history-tab":{templateUrl:"views/ts1/ts1.html"}}});
    $stateProvider.state("tabs.ts2",{url:"/ts2",views:{"history-tab":{templateUrl:"views/ts1/ts2.html"}}});
    $stateProvider.state("tabs.ts3",{url:"/ts3",views:{"history-tab":{templateUrl:"views/ts1/ts3.html"}}});
    $stateProvider.state("tabs.ts4",{url:"/ts4",views:{"history-tab":{templateUrl:"views/ts1/ts4.html"}}});
    $stateProvider.state("tabs.ts5",{url:"/ts5",views:{"history-tab":{templateUrl:"views/ts1/ts5.html"}}});
    $stateProvider.state("tabs.ts6",{url:"/ts6",views:{"history-tab":{templateUrl:"views/ts1/ts6.html"}}});
    $stateProvider.state("tabs.shi",{url:"/shi",views:{"currencies-tab":{templateUrl:"views/shi/shi.html"}}});
    $stateProvider.state("tabs.sc1",{url:"/sc1",views:{"currencies-tab":{templateUrl:"views/sc/sc1.html"}}});
    $stateProvider.state("tabs.sc2",{url:"/sc2",views:{"currencies-tab":{templateUrl:"views/sc/sc2.html"}}});
    $stateProvider.state("tabs.sc3",{url:"/sc3",views:{"currencies-tab":{templateUrl:"views/sc/sc3.html"}}});
    $stateProvider.state("tabs.sc4",{url:"/sc4",views:{"currencies-tab":{templateUrl:"views/sc/sc4.html"}}});
    $stateProvider.state("tabs.sc5",{url:"/sc5",views:{"currencies-tab":{templateUrl:"views/sc/sc5.html"}}});
    $stateProvider.state("tabs.weather",{url:"/weather",views:{"rates-tab":{templateUrl:"views/weather/weather.html", controller:"weatherController"}}})
    $stateProvider.state("tabs.restaurants",{url:"/restaurants", views:{"rates-tab":{templateUrl:"views/restaurants/restaurants.html"}}});
    //默认首页
    $urlRouterProvider.otherwise("/tabs/home")
    $urlRouterProvider.otherwise("/tour")

})