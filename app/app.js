var myNinjaApp=angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController', function($scope){

    var technologies = [
        {name: 'C#', likes: 0, dislikes: 0},
        {name: 'Java', likes: 0, dislikes: 0},
        {name: 'Python', likes: 0, dislikes: 0},
        {name: 'Ruby', likes: 0, dislikes: 0}
    ];

    $scope.technologies = technologies;

    $scope.increaseLikes = function(technology){
        technology.likes++;
    };

    $scope.increaseDislikes = function(technology){
        technology.dislikes++;
    };

});