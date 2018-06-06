(function () {
    'use strict';

    angular.module('app').controller('CreateBlogController', createCtrl);
    angular.module('app').controller('EditBlogController', editCtrl);

    function createCtrl($http, $routeParams) {

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

        function initCat() {
            $http.get(urlCat).then(function (result) {
                vm.categories = result.data;

            });
        }

        function submitData() {
            var blog = {
                blogTitle: this.blogTitle,
                blogDescription: this.blogDescription,
                blogCategoryId: this.blogCategoryId


            }

            return $http.post(urlBlogs, blog, {headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function () {


                    window.location.href = '#/profile';


                }, function (error) {
                    console.log(error)
                });


        }
    }

    function editCtrl($http, $routeParams, $scope) {
        var vm = this;
        vm.blog = {};
        var urlBlogs = 'https://localhost:44305/api/blogs/';
        var urlCat = 'https://localhost:44305/api/blogcategories/';
        var blogId = $routeParams.blogId;
        vm.editBlog = editBlog;

        init();

        function init() {
            $http.get(urlBlogs + blogId).then(function (result) {
                vm.blog = result.data;

                initCat();
            });

        }

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

        function initCat() {
            $http.get(urlCat).then(function (result) {
                vm.categories = result.data;

            });
        }

    }

})();