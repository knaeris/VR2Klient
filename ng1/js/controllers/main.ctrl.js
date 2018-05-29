(function () {
    'use strict';

    angular.module('app').controller('MainController', Ctrl);

    function Ctrl($scope) {

        $scope.ref = ref;


        function ref() {
            if (sessionStorage.getItem("accessToken") !== null) {
                window.location.href='#/createblog'
            }
            else
                window.location.href='#/login'


        }


    }


})();