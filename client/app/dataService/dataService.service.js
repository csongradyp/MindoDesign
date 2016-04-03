'use strict';

angular.module('mindodesignApp')
  .service('dataService', function ($q, $http) {
        var json = null;

        this.getData = function() {
            var deferred = $q.defer();
            if(!json) {
                $http.get("http://mindodesign.hu/gallery-min.json")
                    .success(function (response) {
                        json = response;
                        deferred.resolve(response);
                    }).catch(function () {
                        console.error("Unable to get datasource");
                    });
            } else {
                deferred.resolve(json);
            }
            return deferred.promise;
        }
  });
