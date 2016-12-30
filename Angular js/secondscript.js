var myapp = angular.module("MyModule",[]);
var mycontroller =  function ($scope){
  $scope.message = "Angular js Tutorial";
};
myapp.controller("mycontroller1",mycontroller);
