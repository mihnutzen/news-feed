(function() {
  'use strict';

  angular.module('newsFeedApp')

  .directive('newsView', function () {

    return {
      scope: {
        item: '=',
        total: '='
      },

      link: function (scope) {

        scope.$watch('item', function (data) {
          if (data) {
            scope.newsItem = data;
          }

        });

      },

      controller: function ($scope, $state) {

        $scope.$watch('newsItem', function (data) {
          if (data) {
            // console.log('data', data);
          }
        });

        $scope.nextNews = function() {
          if ($state.params.newsId < $scope.total) {
            $scope.goToNews(parseInt($state.params.newsId, 10) + 1);
          }
        };

        $scope.prevNews = function() {
          if ($state.params.newsId > 1) {
            $scope.goToNews(parseInt($state.params.newsId, 10) - 1);
          } else {
            $state.go('home');
          }
        };

        $scope.goHome = function() {
          $state.go('home');
        };

        $scope.goToNews = function(id) {
          $state.go('news', { newsId: id });
        };

      },

      templateUrl: 'views/news.html'
    };

  });

})();
