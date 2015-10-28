"use strict";angular.module("mindodesignApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap","duScroll"]).config(["$routeProvider","$locationProvider",function(a,b){a.otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("mindodesignApp").controller("AdvicesCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("mindodesignApp").config(["$routeProvider",function(a){a.when("/javaslataink",{templateUrl:"app/advices/advices.html",controller:"AdvicesCtrl"})}]),angular.module("mindodesignApp").directive("onFinishRender",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){b.$last===!0&&a(function(){b.$emit("ngRepeatFinished")})}}}]).controller("GalleryCtrl",["$scope","$routeParams",function(a,b){a.images={},a.description="",lightbox.option({wrapAround:!0,resizeDuration:300,showImageNumberLabel:!0,albumLabel:"%1. kép - összesen: %2"});var c={strasszosEgyszeruseg:{images:["https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra2.jpg","https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra5.jpg","https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra4.jpg","https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra1.jpg","https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra3.jpg","https://dl.dropboxusercontent.com/u/6057082/strasszos%20egyszer%C5%B1s%C3%A9g/stra6.jpg"],title:"strasszos egyszerüség",description:"A “strasszos egyszerűség” néven megjelölt meghívónál a klasszikus bordó mintán felül a házasulandó pár karikagyűrűiket szerette volna viszontlátni, így az finom módon ábrázolva helyezkedik el az esküvői szöveg mögött. A menyasszony kérése volt, hogy a csillogás a meghívóról se maradjon le, így egy strasszkövet terveztünk a pár monogramjával ellátott borító pauszlapjára."},osszefonodva:{images:["https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze4.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze1.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze5.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze8.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze3.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze7.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze2.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze9.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6sszefon%C3%B3dva/%C3%B6ssze6.jpg"],title:"összefonódva",description:"Az “összefonódva” esküvői grafikai csomagnál indás motívumok és a bordó árnyalatok kaptak kiemelt szerepet. A meghívót egy laposra terveztük dupla oldalas mintával, egy hozzá tervezett viaszpecsétes borítékkal, melyhez a nyomóformát is mi készítettük. A meghívón meseszerűen a pár körvonala rajzolódik ki egy elrejtett denevér motívummal együtt, mely a házasulandó pár kívánsága volt. A lapok krém színét a dekorációhoz igazítottuk. Tervezés során az elegáns esküvői vonal és a gótikus (dark) stílus ötvözése volt a cél. A helyszínre továbbá készült: ültetési tábla, üzenőfal, menü és ital lap, ültetőkártya és köszönőajándékot kísérő cetli."},orokUton:{images:["https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k1.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k1.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k3.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k4.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k5.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6r%C3%B6k%20%C3%BAton/%C3%B6r%C3%B6k6.jpg"],title:"örök úton",description:"Az “örök úton” megrendelő párja egyszerű meghívót szeretettek volna, amelyhez egy matt krémszínű papírt választottak. Több téma felvetődése után rátaláltunk egy kerékpárt ábrázoló képre, és tudták egyből, hogy ez az amit szeretnének. A közös és hosszú életük során eltöltött és rájuk váró gyakori kerékpártúráikra emlékeztetve, ifjú párként az előlapon egy skicces biciklin lettek ábrázolva. Díszítés nélküli meghívót képzeltek el, de egy pár szirommal szemben engedékenyebbek lettek, melyek lágyan rászállhattak a lapokra. A vendégkönyvön és mágneses köszöntő ajándékokon ismét feltűntek az őket ábrázoló rajzon."},utazasSzerelmesei:{images:["https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut1.jpg","https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut5.jpg","https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut4.jpg","https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut2.jpg","https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut3.jpg","https://dl.dropboxusercontent.com/u/6057082/utaz%C3%A1s%20szerelmesei/ut6.jpg"],title:"utazás szerelmesei",description:"Az “utazás szerelmesei” a megrendelő pár eljegyzésének hangulatát és a rengeteg közös utazásaikat idézi fel. A több oldalas meghívóban olvasható egy rövid leírás a párról, köszönetük, a programterv és az esküvői helyszínt bemutató leírás, valamint a külön beszállókártyán a leglényegesebb esküvői időpontok kerültek feltüntetésre. A meghívón rájuk jellemző grafikai elemek helyezkednek el. A pár továbbá kért menü kártyát, asztalt jelző kártyát, ültető kártyákat és ültetési rendet mutató táblát. A régi térképekre emlékeztető hatás érdekében egy antikolt papír textúra látható minden munkarész hátterében. A vendégkönyvük kiötlésében is segítettünk, mely egy földgömb volt, amire a násznép jókívánságait írhatta."},egybekelve:{images:["https://dl.dropboxusercontent.com/u/6057082/egybekelve/1%20egybe.jpg","https://dl.dropboxusercontent.com/u/6057082/egybekelve/2%20egybe.jpg"],title:"egybekelve",description:"Az “egybekelve” menyasszonya és vőlegénye a meghívójukon egyszerű, nem fényképszerű ábrázolásban szerették volna önmagukat viszontlátni. A díszítő formákhoz illeszkedve az őket ábrázoló kép került a háromba hajtogatott meghívó középpontjába."},olelve:{images:["https://dl.dropboxusercontent.com/u/6057082/%C3%B6lelve/1%20%C3%B6lel.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6lelve/2%20%C3%B6lel.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6lelve/3%20%C3%B6lel.jpg","https://dl.dropboxusercontent.com/u/6057082/%C3%B6lelve/4%20%C3%B6lel.jpg"],title:"ölelve",description:"Az “ölelve” meghívó egyike az elsők között elkészült meghívóinknak, melyen díszítő mintákon felül a házasulandó pár sziluettje látható az előlapon. Egyszerű, finom meghívót képzeltek el maguknak, hasonló stílusú vendégkönyvvel. "}};c[b.galleryId]?(a.images=c[b.galleryId].images,a.title=c[b.galleryId].title,a.description=c[b.galleryId].description):b.galleryId&&window.location.replace("/gallery"),a.$on("ngRepeatFinished",function(a){$(".image").awesomeCursor("eye",{size:"18"})})}]),angular.module("mindodesignApp").config(["$routeProvider",function(a){a.when("/gallery",{templateUrl:"app/gallery/galleryBrowser.html",controller:"GalleryCtrl"}).when("/gallery/:galleryId",{templateUrl:"app/gallery/gallery.html",controller:"GalleryCtrl"})}]),angular.module("mindodesignApp").controller("MailCtrl",["$scope","Modal",function(a,b){a.submitted=!1,a.reset=function(){a.user={}},a.submitModal=b.confirm.notify(function(b){a.reset()});var c=a.$on("modal.hide",function(){a.reset()});a.$on("$destroy",function(){c()}),a.reset()}]),angular.module("mindodesignApp").controller("MainCtrl",["$scope","$http",function(a,b){a.awesomeThings=[],b.get("/api/things").success(function(b){a.awesomeThings=b})}]),angular.module("mindodesignApp").config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}),(new WOW).init()}]),angular.module("mindodesignApp").controller("PricesCtrl",["$scope",function(a){}]),angular.module("mindodesignApp").config(["$routeProvider",function(a){a.when("/arak",{templateUrl:"app/prices/prices.html",controller:"PricesCtrl"})}]),angular.module("mindodesignApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,backdrop:"static",scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}},notify:function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments);d.shift();b=c({modal:{dismissable:!1,title:"Levél elküldve",html:"<p><strong>Kösztönjük leveledet! Hamarosan válaszolunk.</strong></p>",buttons:[{classes:"btn-success",text:"Ok",click:function(a){b.close(a)}}]}},"modal-success"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("mindodesignApp").value("duScrollDuration",2e3).value("duScrollOffset",70).controller("NavbarCtrl",["$scope","$location","$document",function(a,b,c){a.menu=[{title:"Bemutatkozás",link:"#intro",spy:"intro"},{title:"Galéria",link:"#gallery",spy:"gallery"},{title:"Javaslataink",link:"#advices",spy:"advices"},{title:"Áraink",link:"#prices",spy:"prices"},{title:"Kapcsolat",link:"#contact",spy:"contact"}],a.scrollToTop=function(){c.scrollTopAnimated(0,2e3)},a.isCollapsed=!0,a.isActive=function(a){return a===b.path()},$(window).scroll(function(){$(".navbar").offset().top>50?($("#custom-nav").addClass("affix"),$(".navbar-fixed-top").addClass("top-nav-collapse")):($("#custom-nav").removeClass("affix"),$(".navbar-fixed-top").removeClass("top-nav-collapse"))})}]),angular.module("mindodesignApp").run(["$templateCache",function(a){a.put("app/advices/advices.html",'<div><div class="btn-back wow fadeInLeft"><a href=/# class="btn btn-arrow">Vissza az oldalra</a></div><div class=advices><div class="wow fadeIn" data-wow-duration=1s><div class=brand></div></div><h1 class=mindo-heading>Javaslataink</h1><h2>Szövegminták</h2><br><p>Kedves Rokon és Barát!<br>Minden nap szép, de a legszebb, amit a mai ad nekünk.<br>Reméljük, hogy hosszú lesz, és örökké együtt leszünk.<br>Sok szeretettel várunk Benneteket, 2015. Július 1-én 16 órakor<br>az Örök kápolnában tartandó esküvőnkre, majd az ezt követő<br>vacsorával egybekötött ünneplésre.<br></p><br><p>Még néhány nap...<br>és 2015. Július 1-én örök hűséget esküszünk egymásnak.<br>E számunkra oly fontos esemény boldog pillanatait szeretnénk megosztani<br>rokonainkkal és barátainkkal, ezért sok szeretettel várjuk Önt és kedves családját<br>16 órakor a Polgármesteri Hivatal házasságkötő termében és<br>17 órakor az Örök kápolnában tartandó esküvőnkre,<br>valamint az azt követő ünnepi vacsorára a Lagzi étterembe.<br></p><br><p>Örömteli elhatározásra jutottunk, hogy 2015. Július 1-én 16 órakor<br>a Polgármesteri Hivatal házasságkötő termében örök hűséget fogadunk egymásnak.<br>A házasságkötésre és az azt követő vacsorára szeretettel meghívunk Benneteket.<br></p><br><p>Szeretettel meghívunk Benneteket,<br>hogy velünk legyetek 2015. Július 1-én<br>tartandó esküvőnkön, amikor is<br>örök hűséget fogadunk egymásnak.<br></p><br><p>Kedves Barát és Rokon!<br>Eljött a nap, amit annyira vártunk, Kéz a kézben az oltárig meg sem állunk.<br>Elmondjuk egymásnak, amit eddig is tudtunk, ezzel megpecsételjük további sorsunk.<br>A nagy izgalomra együnk-igyunk egyet, sok szeretettel várunk Benneteket<br>2015. Július 1-én 16 órakor a Polgármesteri Hivatal házasságkötő termében tartandó esküvőnkre.<br>A ceremóniát követő fergeteges mulatozáson is számítunk részvételetekre!<br></p><br><p>Örömmel tudatjuk Veletek, hogy<br>2015. Július 1-én 16 órakor házasságot kötünk.<br>Ez alkalomból szeretettel meghívunk Benneteket<br>a Polgármesteri Hivatalban tartandó esküvőnkre.<br></p><br><p>Szeretettel meghívjuk Önt és kedves családját, legyenek velünk életünk legszebb perceiben,<br>2015. Július 1-én 16 órakor a Polgármesteri Hivatal házasságkötő termében,<br>majd 17 órakor az Örök kápolnában tartandó esküvőnkön, és az azt követő vacsorán.<br></p><br><p>Kedves Családunk és Barátaink!<br>Szeretettel meghívunk, hogy velünk örüljetek, mikor 2015. Július 1-én 16 órakor a<br>Polgármesteri Hivatal házasságkötő termében végleg összekötjük életünket.<br>Közös Életünk első óráit töltsétek velünk a Lagzi étteremben<br>egy vacsorával egybekötött mulatozáson.<br></p><br><p>Nemsokára eljön a Nagy Nap, mikor mindazok előtt,<br>akik fontosak életünkben örök hűséget fogadunk egymásnak.<br>Így hát szeretettel meghívunk családoddal együtt<br>2015. Július 1-én 16 órakor a Polgármesteri Hivatal házasságkötő<br>termében tartandó esküvőnkre, majd az azt követő ünnepi vacsorára,<br>hogy velünk ünnepeljétek ezt a kezdetektől fogva várt eseményt.<br></p><br><p>Kedves Családunk és Barátaink!<br>Kölcsönös szerelemben és egyetértésben úgy döntöttünk, hogy összekötjük életünket.<br>Örömünket szeretnénk megosztani veletek, ezért szeretettel várunk Benneteket,<br>2015. Július 1-én 16 órakor Polgármesteri Hivatal házasságkötő termében.<br></p><br><p>Úgy döntöttünk, hogy még szebbé varázsoljuk egymás elétet,<br>így 2015. Július 1-én 16 órakor összekötjük életünket.<br>Szeretnénk, ha velünk lennétek és osztoznátok örömünkben e nemes napon.<br>Szeretettel várunk benneteket, a Polgármesteri Hivatal házasságkötő termében,<br>majd az Örök kápolnában tartandó esküvőnkre,<br>valamint az ünnepi vacsorára a Lagzi étterembe.<br></p><br><p>Hamarosan csodálatos pillanat vár ránk,<br>mikor 2015. Július 1-én házasságot kötünk.<br>Szeretnénk, ha velünk lennétek a Polgármesteri Hivatalban,<br>mikor örök hűséget fogadunk egymásnak.<br></p><br><p>2015. Július 1-én eljön a várva-várt nap, mikor összekötjük életünket.<br>E boldog pillanatot szeretnénk megosztani Veletek!<br>Szeretettel várunk Benneteket 16 órakor a Polgármesteri Hivatal házasságkötő termében,<br>majd 17 órakor az Örök templomban tartandó esküvőnkre és az azt követő vacsorára.<br></p><br><p>Gyere el, várunk Rád! :)<br>Esküvő helye: Polgármesteri Hivatal<br>Időpontja: 2015. Július 1. 16 óra<br></p><br><p>Ezen meghívó mindenkori birtoklóját értesítjük,<br>hogy egyrészről mint ... gyűrűs menyasszony,<br>másrészről ... mint boldog vőlegény,<br>2015 évének 7. havának 1. napján a 16 harangszó után<br>az Örök Kápolnában megtartják frigyüket<br>és a házasság szent kötelékét választják.<br>Ezennel feljogosíttatik a fennkölt ceremónián való részvételre,<br>amely célból kéretik ünnepi öltözetét felöltve<br>a fent nevezett helyen és időben tiszteletét tenni,<br>majd a mulatságon részt venni.<br></p><br></div><div class=font-samples><h2 class=text-center>Betűtípusok</h2><br><div class=container><div class=row><div class="col-md-2 col-md-offset-1">elegáns</div><div class="elegant col-md-8">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">írott</div><div class="written col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">gothic</div><div class="gothic col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">vintage</div><div class="vintage col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">penna</div><div class="penna col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">bohókás</div><div class="funny col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">vidám</div><div class="happy col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">finom</div><div class="fine col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">minimal</div><div class="minimal col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div><div class=row><div class="col-md-2 col-md-offset-1">nyomtatott</div><div class="typed col-md-9">Örömmel értesítünk... Szeretettel várunk...</div></div></div></div><div class="wow fadeIn" data-wow-duration=1s><div class=brand></div></div></div>'),a.put("app/gallery/gallery.html",'<div class=gallery><div class="container col-md-12"><div class=row><div class="btn-back wow fadeInLeft"><a href="/" class="btn btn-arrow">Vissza az oldalra</a></div><div class=col-md-10><h1 class="wow fadeIn" data-wow-duration=3s>{{title}}</h1></div></div></div><div class="container col-md-12"><div class=row><div class=col-md-1></div><div class=col-md-7><div class=images><a ng-repeat="image in images track by $index" on-finish-render=ngRepeatFinished class=image data-lightbox=group href={{image}}><img src={{image}} class="wow fadeIn" data-wow-delay=0.{{$index}}s></a></div></div><div class="col-md-3 hover-zoom"><div class="description wow fadeIn" data-wow-duration=3s>{{description}}</div><span class="wow fadeInUp" data-wow-delay=1s data-wow-duration=2s><img src=/assets/images/d6112a25.brand.png class=mindo-footer></span></div><div class=col-md-1></div></div></div></div>'),a.put("app/gallery/galleryBrowser.html",'<div class=container><div class=row><div class="view view-first road-img"><div class="img road-img"><div class=mask><h2>Örök utazók</h2><p>Az örökmozgó fiatal pár egyszerű és letisztult meghívót kért amin megjelenik kedvenc túrázóeszközük, a bicikli. A választott virágukkal, a rózsával lett teljes az összkép.</p><a href=gallery/orokUton class="btn btn-warning">Megnézem</a></div></div></div><div class="view view-first travellers-img"><div class="img travellers-img"><div class=mask><h2>Utazás szerelmesei</h2><p>Az utazás szerelmesei úgy gondolták, hogy a közös életükhöz vezető úthoz egy útlevelet és hozzá tartozó beszállókártyát adnak a kedves rokonságnak</p><a href=gallery/utazasSzerelmesei class="btn btn-warning">Megnézem</a></div></div></div><div class="view view-first strass-img"><div class="img strass-img"><div class=mask><h2>Strasszos egyszerűség</h2><p>Az egyszerűbb és letisztultabb stílus kedvelő párnak készült a számukra megfelelő meghívó</p><a href=gallery/strasszosEgyszeruseg class="btn btn-warning">Megnézem</a></div></div></div></div></div>'),a.put("app/mail/mail.html",'<section id=contact class="home-section text-center contact"><div class=heading-contact><div class="col-lg-8 col-lg-offset-2"><div class="wow bounceInDown"><div class=section-heading><h2>Keress minket bátran!</h2><i class="fa fa-2x fa-angle-down"></i></div></div></div><div class="col-md-7 col-md-offset-5"><table class=contact-details><tr><td>Email</td><td><div class="fa fa-envelope"></div></td><td><a href=mailto:info@mindodesign.hu target=_blank>info@mindodesign.hu</a></td></tr><tr><td>Telefon</td><td><div class="fa fa-phone"></div></td><td><a href=tel:+36305241838>+36 30/ 52 41 838</a></td></tr></table></div></div><div class=container><div class=row><div class="col-lg-2 col-lg-offset-5"><hr class=marginbot-50></div></div><div style="letter-spacing: 8pt;padding-bottom: 15px">vagy írj nekünk itt</div><div class="row wow fadeIn" data-wow-delay=0.1s ng-controller=MailCtrl><div class=col-lg-12><div class=boxed-grey><iframe name=hidden_iframe id=hidden_iframe style=display:none onload="if(submitted) {}"></iframe><div class="col-md-3 col-sm-0"></div><div class="col-md-6 contact-form"><form id=contact-form action=https://docs.google.com/forms/d/1iI1h7ClF0zawJyPW1tjkgllkKElk_ROMQYlzZoC91R0/formResponse method=post target=hidden_iframe onsubmit="submitted=true"><div class=form-group><label for=name>Név</label><div class=input-group><span class=input-group-addon><span class="glyphicon glyphicon-user"></span></span> <input name=entry.1789661940 ng-model=user.name class=form-control id=name placeholder=Neved required></div></div><div class=form-group><label for=email>E-mail</label><div class=input-group><span class=input-group-addon><span class="glyphicon glyphicon-envelope"></span></span> <input type=email name=entry.19308889 ng-model=user.email class=form-control id=email placeholder="e-mail címed ahova válaszunkat várod" required></div></div><div class=form-group><label for=name>Üzenet</label><textarea name=entry.1781394370 id=message ng-model=user.message class=form-control rows=9 cols=25 required placeholder="Írd meg nekünk kérdésed vagy kérésed és mi készséggel válaszolunk"></textarea></div><button type=submit ng-click=submitModal() class="btn btn-lg btn-warning btn-block" id=sendMail><span class="glyphicon glyphicon-send"></span> Küldés</button></form></div><div class="col-md-3 col-sm-0"></div></div></div></div></div></section>'),a.put("app/main/main.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><header id=banner><section class=hero id=hero><div class=container><div class=row><div class="col-md-8 col-md-offset-2 text-center inner"><div class="wow fadeInDown mindo">mindo <span class="wow fadeInDown" data-wow-delay=0.1s>design</span></div><p class="wow fadeInUp delay-05s">egyediség, amely&nbsp; titeket&nbsp; tükröz</p></div></div></div></section></header><section class=text-center><div class=mindo-heading>Fő profiljaink</div><div class=container><div class=row><div class=col-md-3><div class=icon><i class="fa fa-envelope-o fa-4x shadow wow fadeInDown"></i></div><h2>Esküvői meghívó</h2><p>Ti stílusotokhoz igazodó egyedi esküvői meghívó, amely benneteket tükröz</p></div><div class=col-md-3><div class=icon><i class="fa fa-leanpub fa-4x shadow wow fadeInDown" data-wow-delay=0.3s></i></div><h2>Vendégkönyv</h2><p>esküvői meghívó stílusában készülő vendégkönyv, vagy akár üzenőfal</p></div><div class=col-md-3><div class=icon><i class="fa fa-map-o fa-4x shadow wow fadeInDown" data-wow-delay=0.6s></i></div><h2>Kiegészítők</h2><p>névkártyák, ültetési tábla, menükártya, italkártya, asztaljelek, köszönőajándék kellékek, esküvői információs táblák</p></div><div class=col-md-3><div class=icon><i class="fa fa-picture-o fa-4x shadow wow fadeInDown" data-wow-delay=0.9s></i></div><h2>Egyéb grafika</h2><p>bélyegző, fotózásokhoz kelléktáblák, esküvői honlap, legény- és lánybúcsús grafikák, bármilyen grafikai tervek</p></div><div class=clearfix></div></div></div></section><section class="text-center section-padding wow fadeIn" id=intro><div class=container><h1 class=mindo-heading>Rólunk</h1><p>Csapatunk fiatal kreatív tervezőkből áll. Különféle grafikai munkáink 2010 óta készülnek, az esküvői vonalra 2013-ban kezdtünk ráállni. Terveinket vidám megrendelő jegyeseinkkel formáltuk, akik már a meghívótól szerették volna, ha esküvőjük minden eleme önmagukat tükrözi. Egyedi elképzeléseiteket bármilyen paraméterekkel rendelkezhetnek, melyekhez grafikai tervezésen túl megegyezés szerint akár gyártást is vállalunk.</p><p>Reméljük, részesei lehetünk a nagy napotok előkészületeinek, írjatok bátran!</p></div></section><div class=unique><p>Legyen egyedi,</p><p>legyen még emlékezetesebb</p></div><section class="text-center wow fadeIn" id=gallery><div class=container><h1 class=mindo-heading>Eddigi munkáink</h1><div class=gallery-header><p>gondosan készültek, hogy olyanok legyen amilyet a párok megálmodtak</p></div><div class=row><div class="view view-first road-img"><div class="img road-img"><div class=mask><h2>Örök utazók</h2><p>Az “örök úton” megrendelő párja egyszerű meghívót szeretettek volna, amelyhez egy matt krémszínű papírt választottak.</p><a href=gallery/orokUton class="btn btn-warning">Megnézem</a></div></div></div><div class="view view-first travellers-img"><div class="img travellers-img"><div class=mask><h2>Utazás szerelmesei</h2><p>Az “utazás szerelmesei” a megrendelő pár eljegyzésének hangulatát és a rengeteg közös utazásaikat idézi fel.</p><a href=gallery/utazasSzerelmesei class="btn btn-warning">Megnézem</a></div></div></div><div class="view view-first strass-img"><div class="img strass-img"><div class=mask><h2>Strasszos egyszerűség</h2><p>Az egyszerűbb és letisztultabb stílus kedvelő párnak készült a számukra megfelelő meghívó.</p><a href=gallery/strasszosEgyszeruseg class="btn btn-warning">Megnézem</a></div></div></div><div class="view view-first bounded-img"><div class="img bounded-img"><div class=mask><h2>Összefonódva</h2><p>Az “összefonódva” esküvői grafikai csomagnál indás motívumok és a bordó árnyalatok kaptak kiemelt szerepet.</p><a href=gallery/osszefonodva class="btn btn-warning">Megnézem</a></div></div></div><div class="view view-first embraced-img"><div class="img embraced-img"><div class=mask><h2>Ölelve</h2><p>Az “ölelve” meghívó díszítő mintákon felül a házasulandó pár sziluettje látható az előlapon.</p><a href=gallery/olelve class="btn btn-warning">Megnézem</a></div></div></div><div class="view view-first wedded-img"><div class="img wedded-img"><div class=mask><h2>Egybekelve</h2><p>Az “egybekelve” párja a meghívójukon egyszerű, nem fényképszerű ábrázolásban szerették volna önmagukat viszontlátni.</p><a href=gallery/egybekelve class="btn btn-warning">Megnézem</a></div></div></div></div></div></section><section class=advices id=advices><h1 class=mindo-heading>Javaslataink</h1><div class=container><div class=text-justify>Amennyiben még nem tudjátok mi lenne a számotokra legmegfelelőbb meghívó mi segítünk egy-két hasznos mintával.<br>Tekintsétek meg javaslatainkat amik között találtok a meghívó szövegéhez tartozó szövegmintákat és azokhoz rendelhető betűtípusokat is.</div></div><br><a href=javaslataink class="btn btn-warning">További részletek</a></section><section class=prices id=prices><div class=container><h1 class=mindo-heading>Áraink</h1><h4 class=prices>Frissen szerzett tapasztalatainkból tudjuk, hogy sok esetben esküvőnél az árak szabhatnak határt a képzeleteinknek, mi szeretnénk lehetővé tenni nektek, hogy az egyedi elképzeléseitek elérhetőbbé váljanak számotokra.</h4><div ng-include="\'app/prices/prices.html\'"></div></div></section><section><div ng-include="\'components/contact/contact.html\'"></div></section><footer id=contact class=footer><div class=subfooter><p class=text-center style="font-size: 8pt">Copyright © 2015 mindoDesign</p></div></footer>'),a.put("app/prices/prices.html","<div class=prices><div class=description><p>Az esküvői grafikai elemek sokasága miatt konkrét árat nem tudunk itt most feltüntetni, minden esetben egyedi árajánlatot készítünk. Megközelítő példákkal azonban szolgálhatunk számotokra a már elkészült termékeink alapján.<br>Tervezési díjaink meghívóknál 7000Ft-tól indulnak (pl strasszos egyszerűség), de egy több oldalas, több lapos meghívónál elérhetik a 17000Ft-ot (pl utazás szerelmesei). A meghatározott díj az első egyeztetést követően 3 módosítás díját tartalmazza, az után ennek költsége alkalmanként 700Ft. Először a meghívókat készítjük el, melyhez hasonló stílusban kérés esetén készülhet: ültetőkártya, menükártya, itakártya, ültetést mutató tábla, asztalokat jelző kártya és bármilyen további fantáziaelem (~2000Ft/tételenként). Ezen tételekhez szintén külön árajánlat készül, melyek az előzőekhez hasonlóan 3 módosításig érvényesek, azt követően alkalmanként 700Ft a változtatás. Minden esetben az egyeztetésekre több verzió készül, így ti határozzátok meg merre haladjunk tovább.<br>Első sorban grafikai tervezéssel foglalkozunk, de kérés esetén a termékeket készen is szállítjuk. Ennek azonban egyedileg meghatározott többlet költsége van, mely az anyagi és nyomtatási díjon felül az elkészítést is magába foglalja.</p><h3>Papír-nyomtatás</h3><p>Abban az esetben, ha tervezési díjainkat soknak találjátok, számoljatok utána, hogy egy kész meghívó csomag mennyibe kerülne. Nálunk a tervezési díjon felül a papír költséggel és a nyomtatási költséggel kell számolnod, amelyek nagy árrésben mozognak, akár 40Ft/A4 laponként is kijöhettek, ahol egy lapra elférhet két meghívó is.<br>Kérés esetén papír és nyomtatási árakról további információkkal szolgálhatunk.</p><h3>Rendelés-tervezés</h3><p>Megrendelés esetén az egyeztetésekre több verziót készítünk elképzeléseitek alapján. A megbeszélések interneten keresztül, képernyő megosztással és emailen történnek, így ezen időpontok elég szabadon választhatóak. A véglegesedett grafikai terveket átutalást követően adjuk át. Bővebb információk kapcsolatfelvételt követően.</p></div></div>"),a.put("components/contact/contact.html",'<div ng-include="\'app/mail/mail.html\'"></div><div><div class="text-center follow-text">megtalálsz minked a közösségi hálókon is</div><div class=col-md-12><div class=social><ul><a href=http://facebook.com/mindodesignhu target=_blank><li class=facebook></li></a> <a href=https://www.pinterest.com/mindodesign target=_blank><li class=printerest></li></a> <a href=http://instagram.com/mindodesign target=_blank><li class=instagram></li></a></ul></div></div></div>'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div id=custom-nav class="navbar navbar-default navbar-fixed-top" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href=# class=navbar-brand ng-click=scrollToTop()><img src=/assets/images/d6112a25.brand.png></a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}"><a ng-href={{item.link}} du-smooth-scroll du-scrollspy>{{item.title}}</a></li></ul></div></div></div>')}]);