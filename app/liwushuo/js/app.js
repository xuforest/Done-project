/**
 * Created by hxsd on 2016/4/13.
 */
/**
 * Created by hxsd on 2016/4/12.
 */
//创建主模块
angular.module("ionicApp",["ionic"]);

//配置路由
angular.module("ionicApp").config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    //明确指定tabs位于底部。  兼容IOS 它默认 在上面
    $ionicConfigProvider.tabs.position("bottom");
    //配置路由
    $stateProvider.state("tabs",{       //"tabs" 是状态机的名称
        url:"/tabs",
        abstract:true,              //设为抽象，不能被激活显示
        templateUrl:"views/tabs/tabs.html"
    });

    $stateProvider.state("tabs.home",{
        url:"/home",               //在实际中会追加到父级路径的后面
        views:{"home-tab":{templateUrl:"views/home/home.html",controller:"homeController"}}
    });

    $stateProvider.state("tabs.topic",{
        url:"/topic",               //在实际中会追加到父级路径的后面
        views:{"topic-tab":{templateUrl:"views/topic/topic.html"}}
    });

    $stateProvider.state("tabs.gift",{
        url:"/gift",               //在实际中会追加到父级路径的后面
        views:{"gift-tab":{templateUrl:"views/gift/gift.html"}}
    });

    $stateProvider.state("tabs.brand",{
        url:"/brand",               //在实际中会追加到父级路径的后面
        views:{"brand-tab":{templateUrl:"views/brand/brand.html"}}
    });


    //默认路由
    $urlRouterProvider.otherwise("/tabs/home");

});

