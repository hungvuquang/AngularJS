myName="London";
var apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
apiurl=apiurl+ myName + "&appid=c5fa5112984ef1d54f8eb90a645bba36";
var weatherApp = angular.module('weatherApp',[]);
weatherApp.controller('weatherCtrl',function ($scope, $http){
    $scope.CurrentDate=new Date();
    $scope.getAPI = function (api){
        $http.get(api)
            .success(function (data){
                if (data){
                    $scope.data= data;
                    $scope.current=data.main.temp;
                    $scope.temp_min=data.main.temp_min;
                    $scope.temp_max=data.main.temp_max;
                    $scope.wind_speed=data.wind.speed;
                    $scope.main=data.timezone;
                    $scope.clouds=data.clouds ? data.clouds.all : undefined;
                    var baseurl = 'https://ssl.gstatic.com/onebox/weather/128/';
                    if ($scope.clouds <20){
                        $scope.img_url=baseurl + 'sunny.png';
                    } else if ($scope.clouds <90){
                        $scope.img_url=baseurl + 'partly_cloudy.png';
                    } else {
                        $scope.img_url= baseurl+ 'cloudy.png';
                    }
                }
            })
            .error(function (data,status) {
                console.log(data);
            });
    }
    $scope.changenam=function (){
        apiurl= 'https://api.openweathermap.org/data/2.5/weather?q='+$scope.nam+'&appid=c5fa5112984ef1d54f8eb90a645bba36';
        $scope.getAPI(apiurl);
    }
    $scope.getAPI(apiurl);
});