(function (){
    'use strict';
    console.log("2");
    angular
    .module('myApp')
    .directive('loginDir',loginDirective);
    loginDirective.$inject=['authenticationFactory','$location'];

    function loginDirective(authenticationFactory,$location) {
        // console.log("hitest");
        var directive={
            restrict:'EA',
        link : link,
        templateUrl:"app/view/logindir.html"
        };
        return directive;
        function link(scope, element,attrs)
        {
            scope.login={
                username:'admin',
                password:'admin'

            };
            scope.auth= function(){
                console.log(authenticationFactory.validate(scope.login));
                if (authenticationFactory.validate(scope.login)){
                  $location.path('/option');
                }  else{
                    scope.err=true;
                    console.log('invalid user');
                    }
                }

            }
        }

    
})();