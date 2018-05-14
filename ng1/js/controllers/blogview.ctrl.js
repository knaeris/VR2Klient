(function () {
    'use strict';

    angular.module('app').controller('BlogViewController', Ctrl);

    function Ctrl($http, $routeParams, $scope, $location) {
        var url = 'https://localhost:44305/api/blogs/';
        var vm = this;
        var blogId = $routeParams.id;
        vm.blog = {};

        init();

        function init() {
            $http.get(url + blogId)
                .then(function (result) {
                vm.blog = result.data;
                console.log(vm.blog);
            });
        }





    }
})();