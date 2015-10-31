'use strict';

angular.module('mindodesignApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    new WOW().init();
    WebFont.load({
      google: {
        families: ['Tangerine', 'Italianno', 'Euphoria Script', 'Montez', 'Amatic+SC', 'Anonymous+Pro']
      }
    });
  });
