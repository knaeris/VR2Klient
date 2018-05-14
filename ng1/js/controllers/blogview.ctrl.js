(function () {
    'use strict';

    angular.module('app').controller('BlogViewController', Ctrl);

    function Ctrl($http, $routeParams, $scope, $location) {
        var vm = this;
        vm.items = {};
        vm.users = {};
        init();
        getUsername();

        function init() {
            $http.get('https://localhost:44305/api/blogposts').then(function (result) {
                vm.items = result.data;
                //console.log(vm.items);
            });
        }

        function getUsername() {
            $http.get('https://localhost:44305/api/aspnetusers').then(function (result) {
                vm.users = result.data;
                console.log(vm.users);
            })

        }



    }
})();