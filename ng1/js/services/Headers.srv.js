(function () {
    'use strict';

    angular.module('app').service('headersSrv', headersSrv);

    function headersSrv() {

        this.getAuthHeader = function () {
            var header = {
                'Authorization': 'Bearer ' + sessionStorage.getItem('session-token')
            };
            return header;
        };
    }
})();