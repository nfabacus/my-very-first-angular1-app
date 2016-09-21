angular.module('directoryApp', [])
    .controller('directoryController', function() {

      var dirList = this;

      dirList.toggle = false;

      dirList.list = [
        {name:'John', age:27 },
        {name:'Tom', age:43 },
        {name:'Lily', age:26 },
        {name:'Ben', age:67 },
        {name:'Ellie', age:34 }
      ];

      dirList.addPerson = function() {
        dirList.list.push({name:dirList.name, age: dirList.age});
        dirList.name= '';
        dirList.age = 0;
      };
    });
