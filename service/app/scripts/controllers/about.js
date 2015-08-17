'use strict';

/**
 * @ngdoc function
 * @name wwwrootApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wwwrootApp
 */
angular.module('wwwrootApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
