(function(){
    angular
        .module('myApp')
        .config(function($routeProvider){
            $routeProvider
            .when('/',{
             
                template:"<login-dir></login-dir>"
            })
            .when('/option', {
                template: "<start-dir></start-dir>"
            })
            .when('/select', {
                template: '<select-dir></select-dir>'
            })
            .otherwise({
                template: '<h1>Not Found</h1>'
            });
        });
})();