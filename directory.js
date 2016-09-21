angular.module('directoryApp', ['ngAnimate'])
    .controller('directoryController', function() {

      var dirList = this;

      dirList.toggle = false;

      dirList.list = [
        {name:'John', age:27, img: 'https://randomuser.me/api/portraits/men/43.jpg' },
        {name:'Tom', age:43, img: 'https://randomuser.me/api/portraits/men/58.jpg' },
        {name:'Lily', age:26, img: 'https://randomuser.me/api/portraits/women/0.jpg' },
        {name:'Ben', age:67, img: 'https://randomuser.me/api/portraits/lego/2.jpg' },
        {name:'Emma', age:30, img: 'https://randomuser.me/api/portraits/women/94.jpg' }
      ];

      dirList.addPerson = function() {
        dirList.list.push({name:dirList.name, age: dirList.age});
        dirList.name= '';
        dirList.age = 0;
      };
    });
