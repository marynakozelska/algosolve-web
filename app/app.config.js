angular.module('algo-solve')
    .config(
        ['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/home', {
                        template: '<home></home>'
                    })
                    .when('/ai-solutions', {
                        template: '<ai-solutions></ai-solutions>'
                    })
                    .when('/features', {
                        template: '<features></features>'
                    })
                    .when('/about', {
                        template: '<about></about>'
                    })
                    .otherwise({
                        redirectTo: '/home'
                    });
            }
        ]
    );