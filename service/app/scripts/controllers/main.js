'use strict';

/**
 * @ngdoc function
 * @name wwwrootApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwrootApp
 */
angular.module('wwwrootApp')
  .controller('MainCtrl', function ($scope, $http) {
      
    $scope.errorMessage = 'Nothing Yet';
  
    $http.get('http://localhost:5001/api/scores')
      .success(function (data) {
    	  $scope.scores = data;
    	  $scope.errorMessage = 'Success';
      })
      .error(function () {
    	  $scope.errorMessage = 'Failure';
      });
  })
    .controller('ScoreCtrl', function ($scope, $routeParams, $http) {
    $scope.errorMessage = 'Score - Nothing Yet';

    $http.get('http://localhost:5001/api/scores/' + $routeParams.scoreId)
      .success(function (data) {

    	  $scope.score = data;
    	  $scope.errorMessage = 'Score - Success';
      })
      .error(function () {
    	  $scope.errorMessage = 'Score - Failure';
      })
//	    .controller('NewScoreCtrl', function($scope, $http) {
//		$scope.errorMessage = 'NewScore - Controller';
//	    });
  });
