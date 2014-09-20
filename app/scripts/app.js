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
    'ngSanitize',
    // 'ngTouch'
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<div home-list data-items="newsItems"></div>'
      })
      .state('news', {
        url: '/news/:newsId',
        controller: 'NewsCtrl',
        views: {
          'news-view': {
            template: '<div news-view data-items="newsItems"></div>'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
  .controller('mainAppController', function($scope, dataService) {
    console.log('-- app controller --');

    // fetch data
    dataService.getAppData().then(function (successResponse) {
      $scope.appData = successResponse.data;
    }, function (errorResponse) {
      console.log('mainAppController - dataService getMenu() error -> ', errorResponse);
    });

    $scope.$watch('appData', function (appData) {
      if (appData) {
        // attach news list to scope
        $scope.newsItems = appData.value.items;
      }
    });

    // console.log('aapp DATA ', $scope.appData);
  });
