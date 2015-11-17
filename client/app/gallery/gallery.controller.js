'use strict';

angular.module('mindodesignApp')
  .directive('onFinishRender', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {
            scope.$emit('ngRepeatFinished');
          });
        }
      }
    }
  })
  .controller('GalleryCtrl', function ($scope, $routeParams) {

    $scope.images = {};
    $scope.description = "";

    lightbox.option({
      'wrapAround': true,
      'resizeDuration': 300,
      'showImageNumberLabel': true,
      'albumLabel': '%1. kép - összesen: %2'
    });

    var galleries = {
      "strasszosEgyszeruseg": {
        "images": [
          "https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra2.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra5.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra4.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra1.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra3.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra6.jpg"
        ],
        "title": "strasszos egyszerüség",
        "description": 'A “strasszos egyszerűség” néven megjelölt meghívónál a klasszikus bordó mintán felül a házasulandó pár karikagyűrűiket szerette volna viszontlátni, így az finom módon ábrázolva helyezkedik el az esküvői szöveg mögött. A menyasszony kérése volt, hogy a csillogás a meghívóról se maradjon le, így egy strasszkövet terveztünk a pár monogramjával ellátott borító pauszlapjára.'
      },
      "osszefonodva": {
        "images": [
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze4.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze1.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze5.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze8.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze3.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze7.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze2.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze9.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze6.jpg"
        ],
        "title": "összefonódva",
        "description": 'Az “összefonódva” esküvői grafikai csomagnál indás motívumok és a bordó árnyalatok kaptak kiemelt szerepet. A meghívót egy laposra terveztük dupla oldalas mintával, egy hozzá tervezett viaszpecsétes borítékkal, melyhez a nyomóformát is mi készítettük. A meghívón meseszerűen a pár körvonala rajzolódik ki egy elrejtett denevér motívummal együtt, mely a házasulandó pár kívánsága volt. A lapok krém színét a dekorációhoz igazítottuk. Tervezés során az elegáns esküvői vonal és a gótikus (dark) stílus ötvözése volt a cél. A helyszínre továbbá készült: ültetési tábla, üzenőfal, menü és ital lap, ültetőkártya és köszönőajándékot kísérő cetli.'
      },
      "orokUton": {
        "images": [
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k1.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k4.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k5.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k2.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k3.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k6.jpg"
        ],
        "title": "örök útazók",
        "description": 'Az “örök útazók” megrendelő párja egyszerű meghívót szeretettek volna, amelyhez egy matt krémszínű papírt választottak. Több téma felvetődése után rátaláltunk egy kerékpárt ábrázoló képre, és tudták egyből, hogy ez az amit szeretnének. A közös és hosszú életük során eltöltött és rájuk váró gyakori kerékpártúráikra emlékeztetve, ifjú párként az előlapon egy skicces biciklin lettek ábrázolva. Díszítés nélküli meghívót képzeltek el, de egy pár szirommal szemben engedékenyebbek lettek, melyek lágyan rászállhattak a lapokra. A vendégkönyvön és mágneses köszöntő ajándékokon ismét feltűntek az őket ábrázoló rajzon.'
      },
      "utazasSzerelmesei": {
        "images": [
          "https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut1.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut5.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut4.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut2.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut3.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut6.jpg"
        ],
        "title": "utazás szerelmesei",
        "description": 'Az “utazás szerelmesei” a megrendelő pár eljegyzésének hangulatát és a rengeteg közös utazásaikat idézi fel. A több oldalas meghívóban olvasható egy rövid leírás a párról, köszönetük, a programterv és az esküvői helyszínt bemutató leírás, valamint a külön beszállókártyán a leglényegesebb esküvői időpontok kerültek feltüntetésre. A meghívón rájuk jellemző grafikai elemek helyezkednek el. A pár továbbá kért menü kártyát, asztalt jelző kártyát, ültető kártyákat és ültetési rendet mutató táblát. A régi térképekre emlékeztető hatás érdekében egy antikolt papír textúra látható minden munkarész hátterében. A vendégkönyvük kiötlésében is segítettünk, mely egy földgömb volt, amire a násznép jókívánságait írhatta.'
      },
      "egybekelve": {
        "images": [
          "https://dl.dropboxusercontent.com/u/6057082/egybekelve/1%20egybe.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/egybekelve/2%20egybe.jpg"
        ],
        "title": "egybekelve",
        "description": 'Az “egybekelve” menyasszonya és vőlegénye a meghívójukon egyszerű, nem fényképszerű ábrázolásban szerették volna önmagukat viszontlátni. A díszítő formákhoz illeszkedve az őket ábrázoló kép került a háromba hajtogatott meghívó középpontjába.'
      },
      "olelve": {
        "images": [
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6lelve/1%20%C3%B6lel.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6lelve/2%20%C3%B6lel.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6lelve/3%20%C3%B6lel.jpg",
          "https://dl.dropboxusercontent.com/u/6057082/%C3%B6lelve/4%20%C3%B6lel.jpg",
        ],
        "title": "ölelve",
        "description": 'Az “ölelve” meghívó egyike az elsők között elkészült meghívóinknak, melyen díszítő mintákon felül a házasulandó pár sziluettje látható az előlapon. Egyszerű, finom meghívót képzeltek el maguknak, hasonló stílusú vendégkönyvvel. '
      }
    };


    if (galleries[$routeParams.galleryId]) {
      $scope.images = galleries[$routeParams.galleryId].images;
      $scope.title = galleries[$routeParams.galleryId].title;
      $scope.description = galleries[$routeParams.galleryId].description;
    } else if ($routeParams.galleryId) {
      window.location.replace('/');
    }

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
      $('.image').awesomeCursor('eye', {size: '18'});
    });


  });
