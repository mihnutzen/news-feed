'use strict';

/**
 * @ngdoc overview
 * @name newsFeedApp
 * @description
 * # newsFeedApp
 *
 * Main module of the application.
 */
angular
  .module('newsFeedApp', [
    // 'ngCookies',
    // 'ngResource',
    // 'ngRoute',
    // 'ngSanitize',
    // 'ngTouch'
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('news', {
        url: '/news/:newsId',
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
