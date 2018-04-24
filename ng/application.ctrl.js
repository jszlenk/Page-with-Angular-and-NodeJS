var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.controller('ApplicationCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

app.run(function($rootScope, $route) {
  $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    $rootScope.pageTitle  = $route.current.title;
    $rootScope.pageDescription = $route.current.pageDescription;
  })
});