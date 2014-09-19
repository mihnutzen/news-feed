'use strict';

/**
 * @ngdoc function
 * @name newsFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsFeedApp
 */
angular.module('newsFeedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
