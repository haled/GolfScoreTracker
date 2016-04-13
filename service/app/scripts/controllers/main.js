'use strict';

/**
 * @ngdoc function
 * @name wwwrootApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwrootApp
 */
var gstModule = angular.module('wwwrootApp');

gstModule.controller('MainCtrl', function ($scope, $http) {
      
    $scope.errorMessage = 'Nothing Yet';
  
    $http.get('http://localhost:5001/api/scores')
      .success(function (data) {
    	  $scope.scores = data;
    	  $scope.errorMessage = 'Success';
      })
      .error(function () {
    	  $scope.errorMessage = 'Failure';
      });
});

gstModule.controller('ScoreCtrl', function ($scope, $routeParams, $http) {
    $scope.errorMessage = 'Score - Nothing Yet';

    $http.get('http://localhost:5001/api/scores/' + $routeParams.scoreId)
      .success(function (data) {

    	  $scope.score = data;
    	  $scope.errorMessage = 'Score - Success';
      })
      .error(function () {
    	  $scope.errorMessage = 'Score - Failure';
      });
});

gstModule.controller('NewScoreCtrl', function($scope, $http, $location) {
    $scope.errorMessage = 'NewScore - Controller';

    $scope.createCourse = function (score) {
	$http.post('http://localhost:5001/api/scores/', $scope.score)
	    .success(function (data) {
		$scope.errorMessage = 'NewScore - Success';
		$location.path('/');
	    })
	    .error(function () {
		$scope.errorMessage = 'NewScore - Fail';
	    });
    }
});
