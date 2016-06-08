/**
 * Created by xinliwei on 2016-03-15 0015.
 */
angular.module("ionicApp")
    .controller("contController", function ($scope, $http, $state, $stateParams, Currencies) {
        // 定义history model，显示在select上。默认是美元
        $scope.history = {
            // select中显示的要么是传过来的货币代码，要么是USD
            currency: $stateParams.currency || 'USD'
        };

        // 在scope中存储所有货币
        $scope.currencies = Currencies;

        // 如果在select中改变了货币币种
        $scope.changeCurrency = function () {
            // 则重新跳转到history页面，但携带的参数是新选择的货币
            $state.go('tabs.history', {currency: $scope.history.currency});
        };

        // chart定义对象：Highcharts指令会将它转为一个图表
        $scope.chart = {
            options: {
                chart: {type: 'line'},
                legend: {enabled: false}
            },
            title: {text: null},
            yAxis: {title: null},
            xAxis: {type: 'datetime'},
            series: []
        };

        // 基于选择的货币，加载历史信息
        /*var url = "https://api.bitcoinaverage.com/history/" +
            $scope.history.currency
            + "/per_hour_monthly_sliding_window.csv";*/
        var url = "per_hour_monthly_sliding_window.csv";
        $http.get(url)
            .success(function (prices) {
                // 将prices字符串拆分到一个数组中，数组元素为一行行的价格
                prices = prices.split(/\n/);
                // 创建一个空白的series来存储所有的数据
                var series = {
                    data: []
                };

                // 遍历每一行价格
                angular.forEach(prices, function (price, index) {
                    // 按逗号分隔字符串拆分
                    price = price.split(',');
                    // 解析并格式化时间和价格值
                    var date = new Date(price[0].replace(' ', 'T')).getTime();
                    var value = parseFloat(price[3]);
                    // 如果date和value都有效，则在series中增加一个点
                    if (date && value > 0) {
                        series.data.push([date, value]);
                    }
                });

                // 将完成的数据series添加到chart
                $scope.chart.series.push(series);
            });

        // 监听$ionicView.enter事件，当缓存不正确时，重置currency model
        // 监听Ionic内置的导航events - 解决Ionic缓存state导致的状态更新问题
        // 将select值重置为来自URL的正确的值.
        $scope.$on('$ionicView.enter', function () {
            $scope.history = {
                currency: $stateParams.currency || 'USD'
            };
        });
    });