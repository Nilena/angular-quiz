(function (){
    'use strict';

    angular
    .module('myApp')
    .directive('selectDir',selectDirective);
    // startquizDirective.$inject=['$location'];
    function selectDirective() {
         console.log("hi");
        // console.log("hitest");
        var directive={
            restrict:'EA',
        link : link,
        templateUrl:"app/view/optionselect.html"
        };
        return directive;
        function link(scope, element,attrs)
        {   
            scope.getVal= function(){ 
                console.log(scope.valSub);
            }
        
         };
    }
    
})();