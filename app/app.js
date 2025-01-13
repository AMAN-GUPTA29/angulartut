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

myNinjaApp.controller('NinjaController2', function($scope){

    var employees = [
        {
            name: "Ben", dateOfBirth: new Date("November 23, 1980"),
            gender: "Male", salary: 55000.788
        },
        {
            name: "Sara", dateOfBirth: new Date("May 05, 1970"),
            gender: "Female", salary: 68000
        },
        {
            name: "Mark", dateOfBirth: new Date("August 15, 1974"),
            gender: "Male", salary: 57000
        },
        {
            name: "Pam", dateOfBirth: new Date("October 27, 1979"),
            gender: "Female", salary: 53000
        },
        {
            name: "Todd", dateOfBirth: new Date("December 30, 1983"),
            gender: "Male", salary: 60000
        }
    ];

    $scope.employees = employees;

    $scope.rowLimit = 3;

    





});