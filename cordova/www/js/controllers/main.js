'use strict';

var gstModule = angular.module('wwwrootApp');

gstModule.controller('MainCtrl', function ($scope, $http) {
      
    $scope.errorMessage = '';
    try {
	$scope.scores = GetAllScores();
    }
    catch(error) {
	$scope.errorMessage = 'MainCtrl - ' + error;
    }
});

gstModule.controller('ViewScoreCtrl', function ($scope, $routeParams, $http) {
    $scope.errorMessage = '';

    try {
	$scope.score = GetScore($routeParams.scoreId);
    }
    catch(error) {
	$scope.errorMessage = 'ViewScoreCtrl - ' + error;
    }
});

gstModule.controller('EditScoreCtrl', function ($scope, $routeParams, $http, $location) {
    $scope.errorMessage = '';

    try {
	$scope.score = GetScore($routeParams.scoreId);
    }
    catch(error) {
	$scope.errorMessage = 'EditScoreCtrl - ' + error;
    }
    
    $scope.saveEdits = function (score) {
	try {
	    SaveItem($scope.score);
	    $location.path('/');
	}
	catch(err) {
	    $scope.errorMessage = 'EditScoreCtrl (saveEdits) - ' + err;
	}
    }
});

gstModule.controller('NewScoreCtrl', function($scope, $http, $location) {
    $scope.errorMessage = '';
    $scope.view = "New";
    
    $scope.createCourse = function (score, holeCount) {
	try {
	    holeCount = $scope.holeCount;
	    $scope.score.HoleScores = EmptyHoles(holeCount);
	    SaveNewItem($scope.score);
	    $scope.view = "Edit";
	}
	catch(error) {
	    $scope.errorMessage = 'NewScoreCtrl (createCourse) - ' + error;
	}
    }
    
    $scope.saveRound = function (score) {
	try {
	    SaveItem($scope.score);
	    $location.path('/');
	}
	catch(err) {
	    $scope.errorMessage = 'NewScoreCtrl (saveRound) - ' + err;
	}
    }
});


