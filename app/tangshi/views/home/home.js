angular.module("ionicApp")
    .controller("homeController",function($scope){
        $scope.show1=false;

        $scope.show=function(){
            $scope.show1=!$scope.show1;

        }

    });


