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
          },
          setItemsPerpage: function(number) {
            this.itemsPerPage = number;
            this.totalPages();
          }
        };


        $scope.$watch('newsList', function (data) {
          if (data) {
            for (var i = 0; i < data.length; i++) {
              var itemData = data[i];

              // the api returns different kinds of data eg: media content / thumbnail
              // because of this visual data is attached to a new var
              if (itemData['media:content'] && itemData['media:content'].url) {
                itemData.visual = itemData['media:content'].url;
              } else if (itemData['media:thumbnail'] && itemData['media:thumbnail'].url) {
                itemData.visual = itemData['media:thumbnail'].url;
              }
            }
          }
        });

      },

      templateUrl: 'views/main.html'
    };

  });

})();
