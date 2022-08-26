var myApp=angular.module('myApp',[]);

myApp.controller('jsonCtrl', function ($scope, $http) {
    $html.get('employees.json').success(function (data) {
        $scope.employees=data;
    });

    $scope.addEmp = function (){
        $scope.employees.push({name: $scope.empName, city: $scope.empCity, state: $scope.empState});
    }

    $scope.getTotalEmployees = function (){
        return $scope.employees.length;
    }

    $scope.reverseMessate = function (){
        return $scope.empName.split("").reverse().join("");
    }
    });

function testCtrl($scope) {
    $scope.names = [
        {name: "HungVQ"},
        {name: "CodeLean"},
        {name: "Vu Quang Hung"}
    ];

    $scope.addName = function () {
        $scope.names.push({name: $scope.myName});
    }

    $scope.reversedMessage= function (){
        return $scope.myName.split("").reverse().join("");
    }
}
