'use strict';

/**
 * @ngdoc function
 * @name wwwrootApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwrootApp
 */

/*
var storage = window.localStorage;
var value = storage.getItem(key); // Pass a key name to get its value.
storage.setItem(key, value) // Pass a key name and its value to add or update that key.
storage.removeItem(key) // Pass a key name to remove that key from storage.
 */

var gstModule = angular.module('wwwrootApp');

gstModule.controller('MainCtrl', function ($scope, $http) {
      
    $scope.errorMessage = 'Nothing Yet';

    $scope.scores = GetAllScores();
    /*$http.get('http://localhost:5001/api/scores')
      .success(function (data) {
    	  $scope.scores = data;
    	  $scope.errorMessage = 'Success';
      })
      .error(function () {
    	  $scope.errorMessage = 'Failure';
      });
    */
});

gstModule.controller('ViewScoreCtrl', function ($scope, $routeParams, $http) {
    $scope.errorMessage = 'View Score - Nothing Yet';

    $scope.score = GetScore($routeParams.scoreId);
    /*$http.get('http://localhost:5001/api/scores/' + $routeParams.scoreId)
      .success(function (data) {
    	  $scope.score = data;
    	  $scope.errorMessage = 'View Score - Success';
      })
      .error(function () {
    	  $scope.errorMessage = 'View Score - Failure';
      });
    */
});

gstModule.controller('EditScoreCtrl', function ($scope, $routeParams, $http, $location) {
    $scope.errorMessage = 'Edit Score - Nothing Yet';

    $scope.score = GetScore($routeParams.scoreId);
    /*$http.get('http://localhost:5001/api/scores/' + $routeParams.scoreId)
      .success(function (data) {
    	  $scope.score = data;
    	  $scope.errorMessage = 'Edit Score - Success';
      })
      .error(function () {
    	  $scope.errorMessage = 'Edit Score - Failure';
      });
    */
    
    $scope.saveEdits = function (score) {
	SaveItem($scope.score);
	$location.path('/');
	/*$http.put('http://localhost:5001/api/scores/' + $scope.score.Id, $scope.score)
	    .success(function (data) {
        	$location.path('/');
            })
	    .error(function() {
	        $scope.errorMessage = 'Edit Score - Failed to save round';
	    });      
        */
    }
});

gstModule.controller('NewScoreCtrl', function($scope, $http, $location) {
    $scope.errorMessage = 'NewScore - Controller';
    $scope.view = "New";
    
    $scope.createCourse = function (score, holeCount) {
	holeCount = $scope.holeCount;
	$scope.score.HoleScores = EmptyHoles(holeCount);
	SaveNewItem($scope.score);
	$scope.view = "Edit";
	/*$http.post('http://localhost:5001/api/scores/', $scope.score)
	    .success(function (scoreid) {
		$scope.score.Id = scoreid;
		$scope.view = "Edit";
		$http.get('http://localhost:5001/api/scores/' + scoreid + '/holes')
		    .success(function (holes) {
			if(holes == "") {
			    $scope.score.HoleScores = EmptyHoles(holeCount);
			}
			else {
			    $scope.score.HoleScores = holes;
			}
		    })
		    .error(function () {
			$scope.score.HoleScores = EmptyHoles(holeCount);
		    })
		$scope.errorMessage = 'NewScore - Success';
	    })
	    .error(function () {
		$scope.errorMessage = 'NewScore - Fail';
	    });
        */
    }
    
    $scope.saveRound = function (score) {
	SaveItem($scope.score);
	$location.path('/');
	/*$http.put('http://localhost:5001/api/scores/' + $scope.score.Id, $scope.score)
	    .success(function (data) {
        	$location.path('/');
            })
	    .error(function() {
	        $scope.errorMessage = 'Failed to save round';
	    });
        */
    }
});


