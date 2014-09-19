'use strict';

/**
 * @ngdoc function
 * @name newsFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsFeedApp
 */
angular.module('newsFeedApp')
  .controller('MainCtrl', function ($scope, dataService) {
    console.log('yyy');

    dataService.getAppData().then(function (successResponse) {
      console.log('App Data: ', successResponse.data);
      $scope.appData = successResponse.data;

      // $rootScope.setHeadline();

    }, function (errorResponse) {
      console.log('mainAppController - dataService getMenu() error -> ', errorResponse);
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
