(function () {
    'use strict';

    angular.module('app').controller('BlogViewController', Ctrl);

    function Ctrl($http, $routeParams) {
        var urlBlogs = 'https://localhost:44305/api/blogs/';

        var vm = this;
        var blogId = $routeParams.id;
        this.blog = {};
        this.blogPosts = [];


        init();
        initBlogPosts();

        function init() {
            $http.get(urlBlogs + blogId)
                .then(function (result) {
                    vm.blog = result.data;
                    console.log(vm.blog);
                });
        }

        function initBlogPosts() {
            $http.get(urlBlogs + blogId + '/blogposts').then(function (result) {
                vm.blogPosts = result.data;
                console.log(vm.blogPosts)
            })
        }
    }
})();