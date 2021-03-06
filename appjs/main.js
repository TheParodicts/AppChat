(function() {

    var app = angular.module('AppChat',['ngRoute', 'ngFileUpload', 'ngCookies']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $location) {
        $routeProvider.when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'LoginController',
            controllerAs : 'loginCtrl'
        }).when('/chat', {
            templateUrl: 'pages/main.html',
            controller: 'ChatController',
            controllerAs : 'chatCtrl'
        }).otherwise({
            redirectTo: '/login'
        });
    }]);

})();
