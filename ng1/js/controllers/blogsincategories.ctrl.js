(function () {
    'use strict';

    angular.module('app').controller('BlogsInCategoriesController', Ctrl);

    function Ctrl($http, $routeParams, $scope){

        var vm = this;
        var url = 'https://localhost:44305/api/blogs';
        var BlogCategoryId = $routeParams.id;
        this.blogs = [];


        init();

        function init() {
            $http.get(url).then(function (result) {
                    vm.blogs = result.data;
                console.log(vm.blogs);
            }.then());
        }





    }

})();