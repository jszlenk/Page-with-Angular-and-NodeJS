var app = angular.module('app');
    app.config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
      $routeProvider
          .when('/',{ controller: 'IndexCtrl', templateUrl: '/templates/index.html', title: 'FIRELINK Aplikacje Web', pageDescription: 'Projektowanie firmowych aplikacji i stron internetowych. Budowa wizerunku marki oraz nowoczesnych e-usług dla biznesu. Zapraszamy do współpracy.' })
          .when('/strony-internetowe-economy',         { templateUrl: '/templates/strony-internetowe-economy.html', title: 'Strony www Economy', pageDescription: 'Wydajne aplikacje www i strony internetowe dla firm. Fotografia oraz filmowanie z lotu ptaka dronem obiektów, pensjonatów, hoteli.' })
          .when('/gwarancja-jakosci',         { templateUrl: '/templates/gwarancja-jakosci.html', title: 'Gwarancja jakości', pageDescription: 'Gwarancja jakości to wysoka jakość świadczonych usług przez Firelink.' })
          .when('/strony-internetowe-premium', { templateUrl: '/templates/strony-internetowe-premium.html', title: 'Strony www Premium', pageDescription: 'Firmowe strony internetowe. Solidny marketing oraz elegancka grafika.' })
          .when('/aplikacje-biznesowe',         { templateUrl: '/templates/aplikacje-biznesowe.html', title: 'Aplikacje biznesowe', pageDescription: 'Nowoczesne apliakcje przeglądarkowe zwiększające efektywność obsługi firmy.' })
          .when('/fotografowanie',         { templateUrl: '/templates/fotografowanie.html', title: 'Fotografowanie', pageDescription: 'Profesjonalna fotografia wnętrz dla Hoteli, pensjonatów oraz kwater w Władysławowo, Łeba.' })
          .when('/filmowanie-dronem',         { templateUrl: '/templates/filmowanie-dronem.html', title: 'Filmowanie Dronem', pageDescription: 'Filmowanie z lotu ptaka dronem obiektów, Hoteli, pensjonatów oraz kwater w Władysławowo, Łeba' })
          .when('/program-partnerski',         { templateUrl: '/templates/program-partnerski.html', title: 'Program partnerski', pageDescription: 'Program partnerski - Zarabiaj z FireLink! Zapraszamy do współpracy handlowców oraz firmy chcące rozszerzyć swoją działalność o sprzedaż usług internetowych.' })
          .when('/blog',         { templateUrl: '/templates/blog.html', title: 'Blog Web APP', pageDescription: 'Blog o pragramowaniu Web. Kurs JavaScript: ES6, Angular 2, React, MongoDB, ExtJS.' })
          .when('/o-autorze',         { templateUrl: '/templates/o-autorze.html', title: 'O Autorze', pageDescription: 'Wieloletnie doświadczenie, Najlepsi specjaliści, Zaawansowane i niekonwencjonalne technologie.' })
          .when('/kontakt',  { controller: 'KontaktCtrl', templateUrl: '/templates/kontakt.html', title: 'Kontakt', pageDescription: 'Firelink - Tworzenie stron i aplikacji biznesowych Web. Zapraszamy do współpracy.' })
          .otherwise({redirectTo: '/'});
    });
