'use strict';

angular.module('mindodesignApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/arak', {
        templateUrl: 'app/prices/prices.html',
        controller: 'PricesCtrl'
      });
  });
