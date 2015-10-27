'use strict';

angular.module('mindodesignApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/javaslataink', {
        templateUrl: 'app/advices/advices.html',
        controller: 'AdvicesCtrl'
      });
  });
