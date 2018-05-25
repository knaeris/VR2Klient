(function () {
    'use strict';

    angular.module('app').service('headersSrv', Srv);

    function Srv() {

        this.getAuthHeader = function () {
            var tokenKey = "accessToken";
            var token = sessionStorage.getItem(tokenKey);
            var headers = {};
            if (token) {
                headers.Authorization = 'Bearer' + token;

            };
            return headers;
        };
    }
})();