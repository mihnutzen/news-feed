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

        $scope.pagination = {
          startPos : 0,
          itemsPerPage: 10,
          totalPages: function() {
            return Math.ceil($scope.newsList.length / this.itemsPerPage);
          },
          prevPage: function() {
            if (this.startPos === 0) {
              this.startPos = this.totalPages();
            } else {
              this.startPos--;
            }
          },
          nextPage: function() {
            if (this.startPos === this.totalPages()) {
              this.startPos = 0;
            } else {
              this.startPos++;
            }
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
