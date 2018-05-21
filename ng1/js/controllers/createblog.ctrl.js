(function () {
    'use strict';

    angular.module('app').controller('CreateBlogController', Ctrl);

    function Ctrl($http, $location){

        var vm = this;
        var urlCat = 'https://localhost:44305/api/blogcategories/';
        var urlBlogs = 'https://localhost:44305/api/blogs';
        var urlBlogPosts = 'https://localhost:44305/api/blogposts';
        this.categories = [];
        vm.blogPost = {};
        vm.blog = {};
        vm.submitData = submitData;

        initCat();

        function initCat() {
            $http.get(urlCat).then(function (result) {
                vm.categories = result.data;
                console.log(vm.categories);
            });
        }

        function submitData() {
            $http.post(urlBlogPosts, vm.blogPost)

        }

    }

})();