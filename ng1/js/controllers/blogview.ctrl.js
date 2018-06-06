(function () {
    'use strict';

    angular.module('app').controller('BlogViewController', Ctrl);

    function Ctrl($http, $routeParams) {

        //variables
        var urlBlogs = 'https://localhost:44305/api/blogs/';
        var vm = this;
        var blogId = $routeParams.id;
        this.blog = {};
        this.blogPosts = [];

        init();
        initBlogPosts();
        vm.deleteBlog=deleteBlog;

        //Function to get certain blog with its data
        function init() {
            $http.get(urlBlogs + blogId)
                .then(function (result) {
                    vm.blog = result.data;

                });
        }

        //Function to get blogposts from a blog
        function initBlogPosts() {
            $http.get(urlBlogs + blogId + '/blogposts').then(function (result) {
                vm.blogPosts = result.data;

            })
        }

        //Deletes the blog
        function deleteBlog(){
            $http.delete(urlBlogs+blogId,{headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}}).then(function(result){
                console.log(result.data);
                alert("blogi deleted");
                window.location.href='#/main'
            })
        }
    }
})();