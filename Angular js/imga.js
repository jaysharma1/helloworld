
var myapp = angular.module("MyModule",[]);
var mycontroller =  function ($scope){
var country={
Name:"usa",
capital:"SHARMA",
src:"C:/Users/hp/Desktop/HTML/Home - Army Portal_files/message_board_1.jpg",
alt:""
}
  $scope.country = country;
};
myapp.controller("mycontroller",mycontroller);
