(function () {
    'use strict';

    angular.module('app').controller('AllBlogsController', Ctrl);

    function Ctrl($http) {
        var vm = this;
        var url =  'https://localhost:44305/api/blogs';
        this.blogs = [];

        init();

        //Function to get all blogs
        function init() {

            $http.get(url, {headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function (result) {
                vm.blogs = result.data;

            });
        }

    }
})();
