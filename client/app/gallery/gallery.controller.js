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
          "https://photos-2.dropbox.com/t/2/AADw59Ue-8OFOl7vnuDHkDwFmbgCAhfXoOXSf8HdnP_PrA/12/6057082/jpeg/32x32/1/_/1/2/strs6.JPG/EJXSwgQYpbIBIAIoAg/J6XQVLSsXCbrKalPBhXlVxYRZCKxHy5o81ZnR-12Fm8?size=1600x1200&size_mode=2",
          "https://photos-5.dropbox.com/t/2/AABfNTEi1InbmLRXV8iQOGoUH9cQwQiuE4oPNzew23FrDA/12/6057082/jpeg/32x32/1/_/1/2/stra1.jpg/EJXSwgQYpbIBIAIoAg/gOa7Qo8EMIXQcpZI7_81gHj2yCXBEDSvv54a5ifWlIA?size=1600x1200&size_mode=2",
          "https://photos-5.dropbox.com/t/2/AADaTm_QTnczELs7n_rgMHOFLvBmft4QICAoAgyiV2POJg/12/6057082/jpeg/32x32/1/_/1/2/stra3.jpg/EJXSwgQYpbIBIAIoAg/VjJXGNkqzm6aY2crl_aBxJA_R9X5aQHD2u7zNE98wI0?size=1600x1200&size_mode=2",
          "https://photos-6.dropbox.com/t/2/AAAphxSw8YHfJmuHhlmQgCXf065gw7vR8eyosXSmCzrbUA/12/6057082/jpeg/32x32/1/_/1/2/stra4.JPG/EJXSwgQYpbIBIAIoAg/e9bcLPSxdSZNzz1nKIGXN9OxYY4-SJdwCYsieoH0PkE?size=1600x1200&size_mode=2",
          "https://photos-3.dropbox.com/t/2/AABnxXk83yTlvgjFnK00SXQ7Kv5VwHzqN6C7YEumM1KhOA/12/6057082/jpeg/32x32/1/_/1/2/stra5.JPG/EJXSwgQYpbIBIAIoAg/ZNinEX22bnUG2ZO8cTwktftoFqzbuYaoLAVKq1Peqos?size=1600x1200&size_mode=2",
          "https://photos-1.dropbox.com/t/2/AABnq1AOOHQQ_GA-pp2p5jfHfw8Mjdth3O-xr_6znZLKnw/12/6057082/jpeg/32x32/1/_/1/2/stra2.jpg/EJXSwgQYpbIBIAIoAg/YLU3opA5hKfFhgW0TVN--iQ_Ci4qqq60-0AAbG5oWd0?size=1600x1200&size_mode=2"
        ],
        "title": "strasszos egyszerüség",
        "description": 'A “strasszos egyszerűség” néven megjelölt meghívónál a klasszikus bordó mintán felül a házasulandó pár karikagyűrűiket szerette volna viszontlátni, így az finom módon ábrázolva helyezkedik el az esküvői szöveg mögött. A menyasszony kérése volt, hogy a csillogás a meghívóról se maradjon le, így egy strasszkövet terveztünk a pár monogramjával ellátott borító pauszlapjára.'
      },
      "osszefonodva": {
        "images": [
          "https://photos-4.dropbox.com/t/2/AAA1R6Ur0ByE0jy2_cmk0Yy3aWWxIaUqv4i5XicM9gTNFw/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze8.jpg/EJXSwgQYn7IBIAIoAg/AEIhcqV85ZZehT4G6Qf2uA8Ul_0-zfoRldA0jyq8nAI?size=1600x1200&size_mode=2",
          "https://photos-1.dropbox.com/t/2/AACU_Wy36iZjhsRfLjJzsgW44Abb5Mnvbf76ZVbX21tYeQ/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze3.jpg/EJXSwgQYn7IBIAIoAg/ZTjkUi6loBPBo7sV3lni1IQ_MPVXM_9I5RXUONOplC4?size=1600x1200&size_mode=2",
          "https://photos-5.dropbox.com/t/2/AADVah5nEjppRaRNy_iBl1UP7o-nRWxTu9cO6mZeVvibvA/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze7.jpg/EJXSwgQYn7IBIAIoAg/h4u8TC3zmu0a_7dyng5s_RAoHpguriIuIDfFrLEoWnI?size=1600x1200&size_mode=2",
          "https://photos-1.dropbox.com/t/2/AACwQjwH2dkTHTUKoy-jqE9_F6HK-fYjVYbTVvrt9qT6kg/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze4.jpg/EJXSwgQYn7IBIAIoAg/AJ_9cNRKlffm-wPLqSagdKh1HP2m-fKMKOhhuVdetxg?size=1600x1200&size_mode=2",
          "https://photos-3.dropbox.com/t/2/AACA8eHyTnOJcRoMT2jvHkGnBd6i41dTHFFjn9K8XdPYLg/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze5.jpg/EJXSwgQYn7IBIAIoAg/uHf0Xo3HjsOvoVK7SKHZ9pv6JYprU_pZAd-yJeIb-MI?size=1600x1200&size_mode=2",
          "https://photos-4.dropbox.com/t/2/AAACF1aMp7C95YVV5CMcd4mYwGMyWfbo3EkojJY7HP4veQ/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze1.jpg/EJXSwgQYn7IBIAIoAg/jGXPjqAVgYeO303B5iNt-3iDFzaaH7t8pHEzeKwbiDs?size=1600x1200&size_mode=2",
          "https://photos-4.dropbox.com/t/2/AADjZ6fUgCGGkrhp4mf0WBsQ2FgM2jYla-A_hXYnS1OUlA/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze6.jpg/EJXSwgQYn7IBIAIoAg/uQr1tmxYhB2gZiwe9c430coMBloYZ3Kl2LOrM5Ys2s0?size=1600x1200&size_mode=2",
          "https://photos-6.dropbox.com/t/2/AAD-oVitAFjcFgPdXBYfXNLA1BQoFABF4HRgjqTNm0bRfw/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze9.jpg/EJXSwgQYn7IBIAIoAg/ekoks4eluExrdT1MgtftAzteVkhQesnUvrX2g4l_aok?size=1600x1200&size_mode=2",
          "https://photos-1.dropbox.com/t/2/AAD6Epglqgrx0vz4yYHLPg2fIph725VPrBs9pehc1MpWJw/12/6057082/jpeg/32x32/1/_/1/2/%C3%B6ssze2.jpg/EJXSwgQYn7IBIAIoAg/D2LjfendjC_z5B-P6InRPBf9L35YhjBNRTOUNWuv-wM?size=1600x1200&size_mode=2"
        ],
        "title": "összefonódva",
        "description": 'Az “összefonódva” esküvői grafikai csomagnál indás motívumok és a bordó árnyalatok kaptak kiemelt szerepet. A meghívót egy laposra terveztük dupla oldalas mintával, egy hozzá tervezett viaszpecsétes borítékkal, melyhez a nyomóformát is mi készítettük. A meghívón meseszerűen a pár körvonala rajzolódik ki egy elrejtett denevér motívummal együtt, mely a házasulandó pár kívánsága volt. A lapok krém színét a dekorációhoz igazítottuk. Tervezés során az elegáns esküvői vonal és a gótikus (dark) stílus ötvözése volt a cél. A helyszínre továbbá készült: ültetési tábla, üzenőfal, menü és ital lap, ültetőkártya és köszönőajándékot kísérő cetli.'
      },
      "orokUton": {
        "images": [
          "https://photos-5.dropbox.com/t/2/AACX0wi5-Dm5-oz6-snhs3pPQryyYAUJyK1DjUF2he1EmA/12/6057082/jpeg/32x32/1/_/1/2/orok1.jpg/EJXSwgQYpbIBIAIoAg/kKoaaCApWtsgqedKpJTzntrJeOFQRT25B21NMkswjaM?size=1600x1200&size_mode=2",
          "https://photos-4.dropbox.com/t/2/AABvowDd_G439VaQTw8CH_IMnC-0VIqxid6VVEBIjK0hiA/12/6057082/jpeg/32x32/1/_/1/2/orok5.jpg/EJXSwgQYpbIBIAIoAg/FGqMlga8gy_sVto-as4as6CHMRx4H1XznOoj9f3wp6E?size=1600x1200&size_mode=2",
          "https://photos-5.dropbox.com/t/2/AACxHbbHdLOYASl2E1Go-Wv2MshA9KknCCAoewXY4W2hCQ/12/6057082/jpeg/32x32/1/_/1/2/orok4.jpg/EJXSwgQYpbIBIAIoAg/0-fmgcF1Ye0q3QrSigTLVoRdGxAZDBdS337VUlyJ2Qg?size=1600x1200&size_mode=2",
          "https://photos-6.dropbox.com/t/2/AAAoT-7fQ_w83c3t1flqv1ssuONe7WfurHmZTC6PA9Ic2Q/12/6057082/jpeg/32x32/1/_/1/2/orok2.jpg/EJXSwgQYpbIBIAIoAg/Ttdd34Lu3sqOMuimml7cd1H184Abxt7KWWrYWKjoO6I?size=1600x1200&size_mode=2",
          "https://photos-3.dropbox.com/t/2/AAAwxubuzWp1B0NG-IkJilcFDYPgncAo2GYUZUkMAMsUdA/12/6057082/jpeg/32x32/1/_/1/2/orok3.jpg/EJXSwgQYpbIBIAIoAg/lk46xkSAoKDV0nYrFIBw7pGxCUeTvMdyjsawUQz20pY?size=1600x1200&size_mode=2",
          "https://photos-3.dropbox.com/t/2/AACXhrgDhClufuJPcmavV1VCDImEN-V8vgBDMP-VHok_uQ/12/6057082/jpeg/32x32/1/_/1/2/orok6.jpg/EJXSwgQYpbIBIAIoAg/88REQ471wpIbVr-iDNCNvCEJRjBgOR2JyOguyWMIuI0?size=1600x1200&size_mode=2"
        ],
        "title": "örök úton",
        "description": 'Az “örök úton” megrendelő párja egyszerű meghívót szeretettek volna, amelyhez egy matt krémszínű papírt választottak. Több téma felvetődése után rátaláltunk egy kerékpárt ábrázoló képre, és tudták egyből, hogy ez az amit szeretnének. A közös és hosszú életük során eltöltött és rájuk váró gyakori kerékpártúráikra emlékeztetve, ifjú párként az előlapon egy skicces biciklin lettek ábrázolva. Díszítés nélküli meghívót képzeltek el, de egy pár szirommal szemben engedékenyebbek lettek, melyek lágyan rászállhattak a lapokra. A vendégkönyvön és mágneses köszöntő ajándékokon ismét feltűntek az őket ábrázoló rajzon.'
      },
      "utazasSzerelmesei": {
        "images": [
          "https://photos-2.dropbox.com/t/2/AAClRTfWAza-rzy7aeFHJ-7op-85q5lZqluL0T_9IM1mrw/12/6057082/jpeg/32x32/1/_/1/2/ut4.jpg/EJXSwgQYpbIBIAIoAg/wmSZrgfVwkiaPou9ttb0rIOamkEyK6lrDfrqO_2Roig?size=1600x1200&size_mode=2",
          "https://photos-3.dropbox.com/t/2/AAAphyY0hgPB77iLpghn2EalF7hqPZm7PaaaS9MBnbK6Vw/12/6057082/jpeg/32x32/1/_/1/2/ut1.jpg/EJXSwgQYpbIBIAIoAg/COXMsm3p_DQQS8AwHRP61k5BD7NicCUwl57JTnrT8bM?size=1600x1200&size_mode=2",
          "https://photos-2.dropbox.com/t/2/AADRjIocs-BAf80RXk-qCmMyEXYMyLsFuyrDHwz05TDQdg/12/6057082/jpeg/32x32/1/_/1/2/ut2.jpg/EJXSwgQYpbIBIAIoAg/cVLZE2-G8q3LPQ-1ZEkkNAfQfQRu5yxGA3Xr2n6WijM?size=1600x1200&size_mode=2",
          "https://photos-5.dropbox.com/t/2/AABGJI4ZHsARG0RI1KA6iPTj8omxhW3gHh0EicCZuMrJSQ/12/6057082/jpeg/32x32/1/_/1/2/ut5.jpg/EJXSwgQYpbIBIAIoAg/f1dpp7S07AC5gNm7pC46m0zGfM0xAfC8uTS3b3g9W08?size=1600x1200&size_mode=2",
          "https://photos-2.dropbox.com/t/2/AABGDAWBmA9Dcy07e_naqLxjgaxfiQQ-hof8XuWWC0PPTQ/12/6057082/jpeg/32x32/1/_/1/2/ut6.jpg/EJXSwgQYpbIBIAIoAg/8NIuebz1b3k-Vnpv4BT2Ladb0U2DBpzZvM-O5zEWYRI?size=1600x1200&size_mode=2",
          "https://photos-5.dropbox.com/t/2/AADCiZtHv3Q5IfEUggkr2_2Y6bImx0sG7npZ3MieVJEXlQ/12/6057082/jpeg/32x32/1/_/1/2/ut3.jpg/EJXSwgQYpbIBIAIoAg/wCYcf2GNkZ2rAbb8JgXmBAaXnxNr7elB5S9znE7-XBg?size=1600x1200&size_mode=2"
        ],
        "title": "utazás szerelmesei",
        "description": 'Az “utazás szerelmesei” a megrendelő pár eljegyzésének hangulatát és a rengeteg közös utazásaikat idézi fel. A több oldalas meghívóban olvasható egy rövid leírás a párról, köszönetük, a programterv és az esküvői helyszínt bemutató leírás, valamint a külön beszállókártyán a leglényegesebb esküvői időpontok kerültek feltüntetésre. A meghívón rájuk jellemző grafikai elemek helyezkednek el. A pár továbbá kért menü kártyát, asztalt jelző kártyát, ültető kártyákat és ültetési rendet mutató táblát. A régi térképekre emlékeztető hatás érdekében egy antikolt papír textúra látható minden munkarész hátterében. A vendégkönyvük kiötlésében is segítettünk, mely egy földgömb volt, amire a násznép jókívánságait írhatta.'
      },
      "egybekelve": {
        "images": [
          "https://photos-1.dropbox.com/t/2/AADfYFf8TYcsVCzy22L6JiTwiVAwZONd73wzsHrRPALkqA/12/6057082/jpeg/32x32/1/_/1/2/1%20egybe.jpg/EPjY2gwYmEogAigC/z-97_MQ6JFbBKr6KPtrieiPsx1QYxdrLhb29-ngolQc?size=1600x1200&size_mode=2",
          "https://photos-3.dropbox.com/t/2/AABNJKUvrtGWFAs3T3EgmW7yJtRaPnN02if6YrpQwErJnA/12/6057082/jpeg/32x32/1/_/1/2/2%20egybe.jpg/EPjY2gwYmEogAigC/b6RaUyeHqp2Sy2n71vmBzL1HgRdOn-idMiRZ53FJhQE?size=1600x1200&size_mode=2"
        ],
        "title": "egybekelve",
        "description": 'Az “egybekelve” menyasszonya és vőlegénye a meghívójukon egyszerű, nem fényképszerű ábrázolásban szerették volna önmagukat viszontlátni. A díszítő formákhoz illeszkedve az őket ábrázoló kép került a háromba hajtogatott meghívó középpontjába.'
      },
      "olelve": {
        "images": [
          "https://photos-2.dropbox.com/t/2/AACss9Vrrm-S_S76P6TOLlAmum-Ss0BOLdOWANvharx3bQ/12/6057082/jpeg/32x32/1/_/1/2/3%20%C3%B6lel.jpg/EPjY2gwYmEogAigC/vKwQ79VhES8b_0F8B3-esflAoP_W-QfdVLEHrhiXeGQ?size=1600x1200&size_mode=2",
          "https://photos-4.dropbox.com/t/2/AAAmAv0ocMwSmRq9hSUnwR_Jh-1gYdZZeoyraaYOL6cqiw/12/6057082/jpeg/32x32/1/_/1/2/2%20%C3%B6lel.jpg/EPjY2gwYmEogAigC/HBXCsa1aMXcm1tF-5AdkmXByjgwGqjC8wp3l3kqNwDE?size=1600x1200&size_mode=2",
          "https://photos-5.dropbox.com/t/2/AABHOO33mXmFq8AcC20rNl0tiQ4Fv_TRvVqFg79iY1cmUw/12/6057082/jpeg/32x32/1/_/1/2/1%20%C3%B6lel.jpg/EPjY2gwYmEogAigC/tfNN7_i5QsTK3aNmBiOrS6S2ZTKqh5pi5XR5-QbsW6U?size=1600x1200&size_mode=2",
          "https://photos-4.dropbox.com/t/2/AADqDwgOl5PyFubL-XnXs8tKOWZ1qKjOoOOX4OfqQmWIsQ/12/6057082/jpeg/32x32/1/_/1/2/4%20%C3%B6lel.jpg/EPjY2gwYmEogAigC/2yhltkMjJ4-JlsTJD44-eyOLvwC5vysk06YUOTiAA8I?size=1600x1200&size_mode=2",
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
      window.location.replace('/gallery');
    }

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
      $('.image').awesomeCursor('eye', {size: '18'});
    });


  });
