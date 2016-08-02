/**
 * Created by guoli on 16/8/1.
 */

var resumeDirectives = angular.module('resumeDirectives',[]);

resumeDirectives.directive('leftWidth',function ($timeout) {
    return function (scope, element, attrs) {
        if (scope.$last === true) {
            $timeout(function () {
                scope.$emit('leftFinished')
            })
        }
    }
});

resumeDirectives.directive('rightWidth',function ($timeout) {
    return function (scope, element, attrs) {
        if (scope.$last === true) {
            $timeout(function () {
                scope.$emit('rightFinished')
            })
        }
    }
});
