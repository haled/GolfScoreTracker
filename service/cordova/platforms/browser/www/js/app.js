'use strict';

/**
 * @ngdoc overview
 * @name wwwrootApp
 * @description
 * # wwwrootApp
 *
 * Main module of the application.
 */
angular
  .module('wwwrootApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/score/:scoreId', {
        templateUrl: 'views/view.html',
        controller: 'ViewScoreCtrl'
      })
     .when('/editscore/:scoreId', {
         templateUrl: 'views/edit.html',
	 controller: 'EditScoreCtrl'
     })
     .when('/newscore', {
        templateUrl: 'views/new.html',
        controller:  'NewScoreCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
