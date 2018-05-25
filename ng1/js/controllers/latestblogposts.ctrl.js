(function () {
    'use strict';

    angular.module('app').controller('latestBlogpostsController', Ctrl);

    function Ctrl($http) {
        var vm = this
        var url = 'https://localhost:44305/api/blogposts/';
        this.blogposts = [];

        init();

        function init() {
            $http.get(url).then(function (result) {
                vm.blogposts = result.data;
                console.log(vm.blogposts);
            });
        }




    }
})();