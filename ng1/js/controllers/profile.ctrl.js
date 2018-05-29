(function () {
    'use strict';

    angular.module('app').controller('profileController', Ctrl);

    function Ctrl($http) {
        var vm = this
        var urlMyBlogs = 'https://localhost:44305/api/myblogs/';
        this.blogposts = [];

        initMyBlogs();



        function initMyBlogs() {
            $http.get(urlMyBlogs, {headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function (result) {
                vm.blogs = result.data;
                console.log(vm.blogs);
            });
        }




    }
})();