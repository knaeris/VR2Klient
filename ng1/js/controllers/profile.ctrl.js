(function () {
    'use strict';

    angular.module('app').controller('profileController', Ctrl);

    function Ctrl($http) {
        //defining variables
        var vm = this;
        var urlMyBlogs = 'https://localhost:44305/api/myblogs/';
        this.blogs=[];

        initMyBlogs();

        //function to get blogs created by user using authorization token

        function initMyBlogs() {
            $http.get(urlMyBlogs, {headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function (result) {
                vm.blogs = result.data;

            });
        }
    }
})();