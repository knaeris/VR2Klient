(function () {
    'use strict';

    angular.module('app').service('sessionSrv', Srv);

    function Srv() {
        this.isLoggedIn = function () {
            var tokenKey = "accessToken";
            var token = sessionStorage.getItem(tokenKey);
            return token !== null;
        };


    }

})();