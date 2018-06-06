(function () {
    'use strict';

    angular.module('app').controller('CreateBlogController', createCtrl);
    angular.module('app').controller('EditBlogController', editCtrl);

    function createCtrl($http) {

        //list of variables
        var vm = this;
        var urlCat = 'https://localhost:44305/api/blogcategories/';
        var urlBlogs = 'https://localhost:44305/api/blogs';

        this.categories = [];
        this.blogCategoryName = '';
        this.blogTitle = '';
        this.blogDescription = '';
        this.blogCategoryId = '';

        vm.submitData = submitData;

        initCat();

        //Getting the list for categories
        function initCat() {
            $http.get(urlCat).then(function (result) {
                vm.categories = result.data;

            });
        }

        //Submits a new blog
        function submitData() {
            var blog = {
                blogTitle: this.blogTitle,
                blogDescription: this.blogDescription,
                blogCategoryId: this.blogCategoryId
            };
            //Posts new blog with its data
            return $http.post(urlBlogs, blog, {headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function () {
                    window.location.href = '#/profile';
                }, function (error) {
                    console.log(error)
                });

        }
    }

    //Controller for editing a blog
    function editCtrl($http, $routeParams, $scope) {
        var vm = this;
        vm.blog = {};
        var urlBlogs = 'https://localhost:44305/api/blogs/';
        var urlCat = 'https://localhost:44305/api/blogcategories/';
        var blogId = $routeParams.blogId;
        vm.editBlog = editBlog;

        init();

        //Gets certain blog
        function init() {
            $http.get(urlBlogs + blogId).then(function (result) {
                vm.blog = result.data;

                initCat();
            });

        }

        //Function itself to edit blog data
        function editBlog() {

            var blog = {
                blogTitle: vm.blog.blogTitle,
                blogDescription: vm.blog.blogDescription,
                blogCategoryId: vm.blog.blogCategoryId,

            };

            $http.put(urlBlogs + blogId, vm.blog,
                {headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function (result) {

                    window.location.href = '#/blog/' + $routeParams.blogId;
                })
        }

        //Getting the list for categories for this controller
        function initCat() {
            $http.get(urlCat).then(function (result) {
                vm.categories = result.data;

            });
        }

    }

})();