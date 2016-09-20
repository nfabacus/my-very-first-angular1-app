angular.module('directoryApp', [])
    .controller('directoryController', function($scope) {
      $scope.list = [
        {name:'John', age:27 },
        {name:'Tom', age:43 },
        {name:'Lily', age:26 },
        {name:'Ben', age:67 },
        {name:'Ellie', age:34 }
      ]
    });
