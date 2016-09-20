angular.module('directoryApp', [])
    .controller('directoryController', function($scope) {
      $scope.list = [
        {name:'John', age:27 },
        {name:'Tom', age:43 },
        {name:'Lily', age:26 },
        {name:'Ben', age:67 },
        {name:'Ellie', age:34 }
      ];

      $scope.addPerson = function() {
        $scope.list.push({name:$scope.name, age: $scope.age});
        $scope.name= '';
        $scope.age = 0;
      };
    });
