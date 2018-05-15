(function () {
    'use strict';

    angular.module('app').service('loginSrv', loginSrv);

    function loginSrv() {
        this.isLoggedIn = function () {
            return sessionStorage.getItem('session-token') !== null;
        };

        this.getLoggedInUser = function () {
            //TODO?
        }
    }

})();