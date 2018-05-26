(function () {
    'use strict';

    angular.module('app').controller('CategoriesController', Ctrl);

    function Ctrl($http){

        var vm = this;
        var url = 'https://localhost:44305/api/blogcategories';
        this.categories = [];


        init();

        function init() {

            $http.get(url).then(function (result) {
                vm.categories = result.data;
                console.log(vm.categories);

            });
        }





    }

})();
