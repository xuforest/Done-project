/**
 * Created by Administrator on 2016/5/13.
 */
angular.module("ionicApp",["ionic"]);

angular.module("ionicApp").config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //明确指定tabs位于底部
    $ionicConfigProvider.tabs.position("bottom");

    //配置路由
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,   //设为抽象的，不能被激活显示
        templateUrl:"views/tabs/tabs.html"
    });
    $stateProvider.state("tour",{url:"/tour",templateUrl:"views/tour/tour.html",controller:"tourController"});

    $stateProvider.state("tabs.beiJing",{
        url:"/beiJing",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"beiJing-tab":{templateUrl:"views/beiJing/beiJing.html"}}
    });
    /*---------------------------------------------------------------------------------------------------------------主界面子菜单切换*/
    $stateProvider.state("tabs.jianjie",{
        url:"/jianjie",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"beiJing-tab":{templateUrl:"views/jianjie/jianjie.html"}}
    });
    $stateProvider.state("tabs.meishi",{
        url:"/meishi",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"beiJing-tab":{templateUrl:"views/meishi/meishi.html",controller:"meiShiController"}}
    });
    $stateProvider.state("tabs.jingdian",{
        url:"/jingdian",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"beiJing-tab":{templateUrl:"views/jingdian/jingdian.html",controller:"jingDianController"}}
    });
    $stateProvider.state("tabs.buy",{
        url:"/buy",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"beiJing-tab":{templateUrl:"views/buy/buy.html"}}
    });
    $stateProvider.state("tabs.wenhua",{
        url:"/wenhua",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"beiJing-tab":{templateUrl:"views/wenhua/wenhua.html"}}
    });
    $stateProvider.state("tabs.old",{
        url:"/old",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"beiJing-tab":{templateUrl:"views/old/old.html"}}
    })
    /*---------------------------------------------------------------------------------------------------------------主界面子菜单切换*/

    $stateProvider.state("tabs.map",{
        url:"/map",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"map-tab":{templateUrl:"views/map/map.html"}}
    });

    $stateProvider.state("tabs.lvXing",{
        url:"/lvXing",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"lvXing-tab":{templateUrl:"views/lvXing/lvXing.html",controller:"listCtrl"}}
    });

    $stateProvider.state("tabs.my",{
        url:"/my",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"my-tab":{templateUrl:"views/my/my.html",controller:"myController"}}
    });
    $stateProvider.state("tabs.login",{
        url:"/login",//在实际中，会追加到父路径后面（就是tabs）  ：/tabs/rates
        views:{"my-tab":{templateUrl:"views/login/login.html",controller:"detailController"}}
    });

    //默认路由
    $urlRouterProvider.otherwise("/tour");
});