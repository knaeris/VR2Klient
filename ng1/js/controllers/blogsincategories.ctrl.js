(function () {
    'use strict';

    angular.module('app').controller('BlogsInCategoriesController', Ctrl);

    function Ctrl($http,$scope, $routeParams){

        //list of variables
        var vm = this;
        var url = 'https://localhost:44305/api/blogcategories/';
        var blogCategoryId = $routeParams.id;
        this.blogs = [];

        initCatTitle();
        initBlogs();

        //To get all the blogs in the selected category
        function initBlogs() {
            $http.get(url + blogCategoryId+'/blogs/').then(function (result) {
                    vm.blogs = result.data;

            })
        }

        //To get blog category name from categories
        function initCatTitle(){
            $http.get(url+blogCategoryId).then(function(result){
                vm.category=result.data;

            })
        }





    }

})();