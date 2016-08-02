/**
 * Created by guoli on 16/7/29.
 */

var resumeControllers = angular.module('resumeControllers',[]);

resumeControllers.controller('ResumeCtrl', ['$http','$scope','$window',
    function ($http,$scope) {

        $http({
            method: 'GET',
            url: './config.json'
        }).then(function  success(response) {
            var res = response;
            $scope.name = res.data.name;
            $scope.position = res.data.position;
            $scope.abstract = res.data.abstract;
            $scope.edus = res.data.edu;
            $scope.cet6 = res.data.cet6;
            $scope.works = res.data.work;
            $scope.skills = res.data.skill;
            $scope.exps = res.data.experiences;
            $scope.contact = res.data.contact;
        }, function  error(response) {
            console.log(response);
        });
    }
]);