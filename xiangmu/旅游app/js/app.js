/**
 * Created by hxsd on 2016/5/12.
 */
// 创建模块
angular.module("ionicApp",["ionic"]);

// 配置路由
angular.module("ionicApp").config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

    // 明确指定tabs位于底部
    $ionicConfigProvider.tabs.position("bottom");

    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:false, // 设置为抽象的，不能被激活显示
        templateUrl:"views/tabs/tabs.html"
    });

    $stateProvider.state("tabs.travel",{
        url:"/travel",
        views:{"travel-tabs":{templateUrl:"views/travel/travel.html",
        controller:"bannerCtrl"}}
    });

    $stateProvider.state("tabs.gonglue",{
        url:"/gonglue",
        views:{"gonglue-tabs":{templateUrl:"views/gonglue/gonglue.html",
        controller:"gonglueCtrl"}}
    });

    $stateProvider.state("tabs.three",{
        url:"/three",
        views:{"three-tabs":{templateUrl:"views/three/three.html",
        controller:"threeCtrl"
        }}
    });

    $stateProvider.state("tabs.jiaotong",{
        url:"/jiaotong",
        views:{"jiaotong-tabs":{templateUrl:"views/jiaotong/jiaotong.html",
           }}
    });

    $stateProvider.state("tabs.travel.jingdian",{
        url:"/jingdian",
        templateUrl:"views/travel/jingdian.html",
    });

    // 默认路由
    $urlRouterProvider.otherwise("/tabs");
});