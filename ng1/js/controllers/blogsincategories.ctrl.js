(function () {
    'use strict';

    angular.module('app').controller('BlogsInCategoriesController', Ctrl);

    function Ctrl($http,$scope, $routeParams,$route){

        var vm = this;
        var url = 'https://localhost:44305/api/blogcategories/';

         var blogCategoryId = $routeParams.id;
        this.blogs = [];

        initCatTitle();
        initBlogs();

        function initBlogs() {
            $http.get(url + blogCategoryId+'/blogs/').then(function (result) {
                    vm.blogs = result.data;
                console.log(url + blogCategoryId+'/blogs/');
            })
        }

        function initCatTitle(){
            $http.get(url+blogCategoryId).then(function(result){
                vm.category=result.data;
                console.log(vm.category);
            })
        }





    }

})();