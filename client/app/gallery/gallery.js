'use strict';

angular.module('mindodesignApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/gallery', {
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryCtrl'
      });
  });
