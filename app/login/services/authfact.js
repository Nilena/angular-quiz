(function(){
    'use strict'
      console.log("3");
angular
.module('myApp')
    .factory('authenticationFactory',authentication);
  
   function authentication()  {
    var authObj={
        validate : function(login){
                if(login.username=='admin' && login.password=='admin'){
                    // console.log("logintrue");
                    return true;

                } else{
                    return false;
                }
            }   
        }
            return authObj;
    }
    
    
})();