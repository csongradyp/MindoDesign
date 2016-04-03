'use strict';

angular.module('mindodesignApp')
     .controller('GalleryCtrl', function ($scope, $routeParams, dataService) {

        $scope.images = {};
        $scope.description = "";
        $scope.title = "";

        function initImageViewer() {
            $('.zoom-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: true,
                closeMarkup: '<button title="Bezár (Esc)" type="button" class="mfp-close">&#215;</button>',
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                tLoading: 'Kép betöltése ...',
                image: {
                    verticalFit: true
                },
                gallery: {
                    enabled: true,
                    tPrev: 'Előző (balra nyíl gomb)',
                    tNext: 'Következő (jobbra nyíl gomb)',
                    tCounter: '<span class="mfp-counter">%curr% / %total% képből</span>',
                },
                zoom: {
                    enabled: true,
                    easing: 'ease-in-out',
                    duration: 300,
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        }

        var galleryId = $routeParams.galleryId;
        dataService.getData().then(function(galleries) {
            if (galleries[galleryId]) {
                $scope.images = galleries[galleryId].images;
                $scope.title = galleries[galleryId].title;
                $scope.description = galleries[galleryId].description;
            } else if (galleryId) {
                console.log(galleries);
                //window.location.replace('/');
            }
        });

        $(document).ready(function () {
            initImageViewer();
        });

    });
