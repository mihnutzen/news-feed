'use strict';

/**
 * @ngdoc function
 * @name newsFeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newsFeedApp
 */
angular.module('newsFeedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.socool = 'i\'m so cool !';
  });
