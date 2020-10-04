//EFI
(function (){
'use strict';

angular.module('myFirstApp', [])
//sharing data with the view through var scope
.controller('MyFirstController', function ($scope){
    $scope.name = "John";
    $scope.sayHello = function (){
        return 'Hello from the function';
    };

});

})();