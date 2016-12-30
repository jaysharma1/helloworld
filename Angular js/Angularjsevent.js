var myapp = angular.module("Mymodule",[]).controller("mycontroller", function($scope){

var techs=[{Name:"C#",LIKES:0,DISLIKE:0},
{Name:"VB.NET",LIKES:0,DISLIKE:0},
{Name:"ASP.NET",LIKES:0,DISLIKE:0},
{Name:"SQL",LIKES:0,DISLIKE:0}
];
$scope.techs=techs;
$scope.INCREMENTLIKES = function(tech){
  tech.LIKES++;
}
$scope.INCREMENTDISLIKES = function(tech){
  tech.DISLIKE++;
}
});
//test
