(function () {
    'use strict';

    angular.module('app').controller('NewController', Ctrl);

    function Ctrl($http, $location){

        var vm = this;
        this.items = [];
        this.newItem = '';
        this.contactname ='';
        this.contactphone ='';
        this.addItem = addItem;

        function addItem(){
            var newItem = {
                name: this.contactname,
                phone: this.contactphone,
                done: false

            };
            $http.post('api/contacts', newItem).then($location.path('/search'));

        }

    }

})();
