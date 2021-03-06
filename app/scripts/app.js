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
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'home-list': {
            template: '<div home-list data-items="newsItems"></div>'
          }
        }
      })
      .state('news', {
        url: '/news/:newsId',
        views: {
          'news-view': {
            template: '<div news-view data-item="newsItem" data-total="itemsCount"></div>'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
  .controller('mainAppController', function($scope, dataService, $rootScope) {
    $scope.loading = true;

    // fetch data
    dataService.getAppData().then(function (successResponse) {
      $scope.loading = false;
      $scope.appData = successResponse.data;
    }, function (errorResponse) {
      $scope.loading = false;
      console.log('mainAppController - dataService getMenu() error -> ', errorResponse);
    });

    $scope.$watch('appData', function (appData) {
      if (appData) {
        // attach news list to scope
        $scope.newsItems = appData.value.items;
        $scope.itemsCount = $scope.newsItems.length;

        if ($scope.newsItemId) {
          $scope.setItem($scope.newsItemId);
        }
      }
    });

    // attach news item data to scope
    $scope.setItem = function(id) {
      $scope.newsItem = $scope.newsItems[id - 1];
    };

    // take param on state change and pass it forward to obtain item data
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      if (toParams && toParams.newsId) {
        $scope.newsItemId = parseInt(toParams.newsId, 10);
        if ($scope.newsItems) {
          $scope.setItem($scope.newsItemId);
        }
      }
    });
  });
