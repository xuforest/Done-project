/**
 * Created by hxsd on 2016/5/11.
 */
//  创建主模块
angular.module("ionicApp",["ionic"]);

//  配置路由
angular.module("ionicApp").config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.position("bottom");

    $stateProvider.state("tabs",{url:"/tabs",abstract:true,templateUrl:"views/tabs/tabs.html"});
    $stateProvider.state("tabs.home", {url: "/home",views:{"rates-tab":{templateUrl: "views/home/home.html",controller:"homeController"}}});
    $stateProvider.state("tour", {url: "/tour",templateUrl: "views/tour/tour.html",controller:"tourController"});
    $stateProvider.state("tabs.reservation",{url:"/reservation",views:{"rates-tab":{templateUrl:"views/reservation/reservation.html",controller:"reservationController"}}});
    $stateProvider.state("tabs.weather",{url:"/weather",views:{"rates-tab":{templateUrl:"views/weather/weather.html",controller:"weatherController"}}});
    $stateProvider.state("tabs.restaurants",{url:"/restaurants",views:{"rates-tab":{templateUrl:"views/restaurants/restaurants.html",controller:"restaurantsController"}}});
    $stateProvider.state("tabs.joke",{url:"/joke",views:{"rates-tab":{templateUrl:"views/joke/joke.html",controller:"jokeController"}}});
    $stateProvider.state("tabs.sth",{url:"/sth",views:{"rates-tab":{templateUrl:"views/sth/sth.html",controller:"sthController"}}});
    $stateProvider.state("tabs.personage",{url:"/personage",views:{"currencies-tab":{templateUrl:"views/personage/personage.html",controller:"personageController"}}});
    $stateProvider.state("tabs.dispark",{url:"/dispark",views:{"rates-tab":{templateUrl:"views/dispark/dispark.html",controller:"disparkController"}}});
    $stateProvider.state("tabs.welfare",{url:"/welfare",views:{"rates-tab":{templateUrl:"views/welfare/welfare.html"}}});
    $stateProvider.state("tabs.money",{url:"/money",views:{"rates-tab":{templateUrl:"views/money/money.html"}}});
    $stateProvider.state("tabs.constel",{url:"/constel",views:{"rates-tab":{templateUrl:"views/constel/constel.html"}}});
    $stateProvider.state("tabs.friend",{url:"/friend",views:{"history-tab":{templateUrl:"views/friend/friend.html"}}});
    $urlRouterProvider.otherwise("/tour");


})