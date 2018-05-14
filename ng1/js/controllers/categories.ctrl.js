(function () {
    'use strict';

    angular.module('app').controller('CategoriesController', Ctrl);

    function Ctrl($http, modalService, $scope){

        var vm = this;
        var url = 'https://localhost:44305/api/blogcategories';
        this.categories = [];
        this.removeItem = removeItem;

        init();

        function init() {
            $http.get(url).then(function (result) {
                vm.categories = result.data;
                console.log(vm.categories);
            });
        }
        function removeItem(id){
            modalService.confirm().then(function() {
                return $http.delete(url + id);}).then(init);

        }
        $scope.find = function(item) {
            if (!$scope.srchStr || (item.BlogCategoryName.toLowerCase().indexOf($scope.srchStr) != -1) || (item.phone.toLowerCase().indexOf($scope.srchStr.toLowerCase()) != -1) ){
                return true;
            }
            return false;
        };




    }

})();
