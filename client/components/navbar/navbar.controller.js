'use strict';

angular.module('mindodesignApp')
  .controller('NavbarCtrl', function ($scope, $location, $document) {
    $scope.menu = [
     {
      'title': 'Szolgáltatások',
      'link': '#responsive',
      'spy' : 'responsive'
    },
    {
      'title': 'Bemutatkozás',
      'link': '#intro',
      'spy' : 'intro'
    },
     {
      'title': 'Galéria',
      'link': '#gallery',
      'spy' : 'gallery'
    },
     {
      'title': 'Kapcsolat',
      'link': '#contact',
      'spy' : 'contact'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $('#custom-nav').addClass('affix');
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $('#custom-nav').removeClass('affix');
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }   
    });

  });