(function () {
    'use strict';

    angular.module('app').controller('CategoriesController', Ctrl);

    function Ctrl($http, modalService, $scope){

        var vm = this;
        this.items = [];
        this.removeItem = removeItem;

        init();

        function init() {
            $http.get('https://localhost:44305/api/blogcategories').then(function (result) {
                vm.items = result.data;
                console.log(vm.items);
            });
        }
        function removeItem(id){
            modalService.confirm().then(function() {
                return $http.delete('https://localhost:44305/api/blogcategories/' + id);}).then(init);

        }
        $scope.find = function(item) {
            if (!$scope.srchStr || (item.BlogCategoryName.toLowerCase().indexOf($scope.srchStr) != -1) || (item.phone.toLowerCase().indexOf($scope.srchStr.toLowerCase()) != -1) ){
                return true;
            }
            return false;
        };




    }

})();
