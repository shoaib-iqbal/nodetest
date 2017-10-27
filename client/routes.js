(function () {
'use strict';
myApp.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '/views/main.html',
            controller: 'mainController'
        })      
})
})();