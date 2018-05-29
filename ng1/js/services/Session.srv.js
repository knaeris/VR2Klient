(function () {
    'use strict';

    angular.module('app').service('sessionSrv', Srv);

    function Srv() {
        this.isLoggedIn = function () {
            var token = sessionStorage.getItem("accessToken");
            return token !== null;
        };


    }

})();