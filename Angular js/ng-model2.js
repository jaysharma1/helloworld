
var myapp = angular.module("Mymodule",[]).controller("mycontroller", function($scope){
     var employee= {
Name:"jaynesh",
AGE:"25",
GENDER:"MALE"
     }
  $scope.employee = employee;
});
