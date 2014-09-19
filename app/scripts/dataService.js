(function() {
  'use strict';


  angular.module('newsFeedApp')

  .factory('dataService', function ($http, $q) {

    var validateResponse = function (response) {
      if (response.status === 200) {
        return response;
      } else {
        return $q.reject(response);
      }
    };

    var getJsonp = function (url) {

      return $http.jsonp(url).success(function (response) {
          return validateResponse(response);
        }, function (response) {
          return validateResponse(response);
        });
    };


    return {
      getAppData: function (url) {
        var dataUrl = 'http://pipes.yahoo.com/pipes/pipe.run?_id=DqsF_ZG72xGLbes9l7okhQ&_render=json&_callback=JSON_CALLBACK';

        if (url) {
          dataUrl = url;
        }
        return getJsonp(dataUrl);
      }
    };
  });

})();
