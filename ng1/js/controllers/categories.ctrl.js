(function () {
    'use strict';

    angular.module('app').controller('CategoriesController', Ctrl);

    function Ctrl($http){

        var vm = this;
        var url = 'https://localhost:44305/api/blogcategories';
        this.categories = [];

        init();
        function init() {
            //Function to get list of categories
            $http.get(url).then(function (result) {
                vm.categories = result.data;
            });

        }

    }
})();
