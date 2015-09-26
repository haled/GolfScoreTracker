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
  
    $http.get('http://localhost:5011/api/scores')
      .success(function (data) {
    	  $scope.scores = data;
    	  $scope.errorMessage = 'Success';
      })
      .error(function () {
    	  $scope.errorMessage = 'Failure';
      });
  });
