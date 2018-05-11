(function () {
    'use strict';

    angular.module('app').controller('BlogsController', Ctrl);

    function Ctrl($http, $routeParams, $scope, $location) {
        var vm = this
        vm.items = {};
        var itemId = $routeParams.id;
        this.editItem = editItem;

        $http.get('https://localhost:44305/api/blogs').then(function (result) {
            vm.items = result.data;
            console.log(vm.items);
        });


        function editItem() {

            var item = {

                name: vm.item.name,
                phone: vm.item.phone


            };
            return $http.put('api/contacts/' + itemId, vm.item).then(function () {
                $location.path('/Search');
            });


        }


    }
})();
