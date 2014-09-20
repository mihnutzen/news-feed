(function() {
  'use strict';

  angular.module('newsFeedApp')

  .filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
      };
  })

  .directive('homeList', function () {

    return {
      scope: {
        items: '='
      },

      link: function (scope) {
        scope.$watch('items', function (data) {

          if (data) {
            scope.newsList = data;
          }

        });

      },

      controller: function ($scope) {
        $scope.startPos = 0;
        $scope.itemsPerPage = 10;
        $scope.newsList = [];
        $scope.totalPages = function() {
          return Math.ceil($scope.newsList.length / $scope.itemsPerPage);
        };

        $scope.prevPage = function() {
          if ($scope.startPos === 0) {
            $scope.startPos = $scope.totalPages();
          } else {
            $scope.startPos--;
          }
        };

        $scope.nextPage = function() {
          if ($scope.startPos === $scope.totalPages()) {
            $scope.startPos = 0;
          } else {
            $scope.startPos++;
          }
        };
      },

      templateUrl: 'views/main.html'
    };

  });

})();


// 'use strict';

// /**
//  * @ngdoc function
//  * @name newsFeedApp.controller:MainCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the newsFeedApp
//  */
// angular.module('newsFeedApp')
//   .controller('HomeCtrl', function ($scope) {
//     console.log('home ctrl');

//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });
