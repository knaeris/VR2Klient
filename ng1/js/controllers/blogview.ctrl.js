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
        vm.deleteBlog=deleteBlog;

        function init() {
            $http.get(urlBlogs + blogId)
                .then(function (result) {
                    vm.blog = result.data;

                });
        }

        function initBlogPosts() {
            $http.get(urlBlogs + blogId + '/blogposts').then(function (result) {
                vm.blogPosts = result.data;

            })
        }
        function deleteBlog(){
            $http.delete(urlBlogs+blogId,{headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}}).then(function(result){
                console.log(result.data);
                alert("blogi deleted");
                window.location.href='#/main'
            })
        }
    }
})();