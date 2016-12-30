var myapp = angular.module("Mymodule",[]).controller("mycontroller", function($scope){
     var countires =[  {Name:"uk",
         cities:[
           {Name:"LONDON"},
           {Name:"BRIHAM"},
           {Name:"MACH"}
         ]
       },
       {Name:"US",
         cities:[{Name:"AMERICA"},{Name:"LA"},{Name:"VA"}]
       },
       {Name:"EURO",
         cities:[
           {Name:"DSG"},
           {Name:"SFG"},
           {Name:"DS"}
         ]
       }
     ]
  $scope.countires = countires;
});
