(function () {
    'use strict';

    angular.module('app').controller('CreateBlogController', Ctrl);

    function Ctrl($http){

        var vm = this;
        var urlCat = 'https://localhost:44305/api/blogcategories';
        var urlBlogs = 'https://localhost:44305/api/blogs/';
        this.categories = [];

        initCat();
        initBlogTitle();

        function initCat() {
            $http.get(urlCat).then(function (result) {
                vm.categories = result.data;
                console.log(vm.categories);
            });
        }

        function initBlogTitle() {
            $http.get(urlBlogs).then(function (result) {
                vm.categories = result.data;
                console.log(vm.categories);
            });
        }

    }

})();