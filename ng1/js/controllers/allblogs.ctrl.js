(function () {
    'use strict';

    angular.module('app').controller('AllBlogsController', Ctrl);

    function Ctrl($http) {
        var vm = this;
        var url = 'https://localhost:44305/api/blogs';
        this.blogs = [];

        init();



        function init() {
            $http.get(url).then(function (result) {
                vm.blogs = result.data;
                console.log(vm.blogs);
            });
        }


    }
})();
