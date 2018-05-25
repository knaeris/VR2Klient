(function () {
    'use strict';

    angular.module('app').controller('BlogViewController', Ctrl);

    function Ctrl($http, $routeParams, $scope, $location) {
        var urlBlogs = 'https://localhost:44305/api/blogs/';
        var urlBlogPosts = 'https://localhost:44305/api/blogposts/';
        var vm = this;
        var blogId = $routeParams.id;
        vm.blog = [];
        vm.blogposts = [];
        vm.filtered = [];

        init();
        //getBlogPostDetails();
        //filtering();

        function init() {
            $http.get(urlBlogs + blogId)
                .then(function (result) {
                vm.blog = result.data;
                console.log(vm.blog);
            }).then(function getBlogPostDetails(){
                $http.get(urlBlogPosts).then(function (result) {
                    vm.blogposts = result.data;
                    console.log(vm.blogposts)

                });
            });
        }


        //array.push(data)
    }
})();