(function () {
    'use strict';

    angular.module('app').service('headersSrv', Srv);

    function Srv() {

        this.getAuthHeader = function () {
          //  var tokenKey = "accessToken";
           // var token = sessionStorage.getItem(tokenKey);
          //  var headers = {};
           // if (token) {
               // headers.Authorization = 'Bearer ' + sessionStorage.getItem(tokenKey);
//
            var headers = {
                'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
            };
          //  };
            return headers;
        };
    }
})();