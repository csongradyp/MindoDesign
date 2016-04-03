'use strict';

angular.module('mindodesignApp')
  .value('duScrollDuration', 2000)
  .value('duScrollOffset', 70)
  .controller('NavbarCtrl', function ($scope, $location, $document) {
    $scope.menu = [
    {
      'title': 'Bemutatkozás',
      'link': '#intro',
      'spy' : 'intro'
    },
     {
      'title': 'Galéria',
      'link': '#galleries',
      'spy' : '#galleries'
    },
    {
      'title': 'Javaslataink',
      'link': '#advices',
      'spy' : 'advices'
    },
    {
      'title': 'Áraink',
      'link': '#prices',
      'spy' : 'prices'
    },
     {
      'title': 'Kapcsolat',
      'link': '#contact',
      'spy' : 'contact'
    }
    ];

    $scope.scrollToTop = function() {
      $document.scrollTopAnimated(0, 2000);
    };

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
