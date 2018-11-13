(function (){
    'use strict';
    console.log("2");
    angular
    .module('myApp')
    .directive('startDir',startquizDirective);
    startquizDirective.$inject=['$location'];
    function startquizDirective($location) {
        
        // console.log("hitest");
        var directive={
            restrict:'EA',
        link : link,
        templateUrl:"app/view/startquiz.html"
        };
        return directive;
        function link(scope, element,attrs)
        {   
            scope.btn= function(val){
                if(val==true)
                {
                	console.log("true1");
                	$location.path('/select');
                }
            }
         };
    }
    
})();