'use strict';

angular.module('mindodesignApp')
  .controller('GalleryCtrl', function ($scope) {

    lightbox.option({
        'wrapAround': true,
        'resizeDuration':300,
        'showImageNumberLabel': true,
        'albumLabel': '%1. kép - összesen: %2',
    });

    $('.images > a').awesomeCursor('search-plus', {size: '18'});
});
  