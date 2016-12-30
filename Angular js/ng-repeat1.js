

var myapp = angular.module("Mymodule",[]).controller("mycontroller", function($scope){
     var employees=[ {Name:"jaynesh",AGE:"25",GENDER:"MALE"},
     {Name:"harshit",AGE:"25",GENDER:"MALE"},
     {Name:"sagar",AGE:"25",GENDER:"MALE"}];
  $scope.employees = employees;
});
