var myapp = angular.module("MyModule",[]);
var mycontroller =  function ($scope){
var employee={
Firstname:"JAYNESH",
LastName:"SHARMA",
AGE:"25"
}
  $scope.employee = employee;
};
myapp.controller("mycontroller1",mycontroller);
