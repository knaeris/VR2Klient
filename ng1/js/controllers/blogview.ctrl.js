(function () {
    'use strict';

    angular.module('app').controller('BlogViewController', Ctrl);

    function Ctrl($http, $routeParams, $scope, $location) {
        var url = 'https://localhost:44305/api/blogs/';
        var vm = this;
        var blogId = $routeParams.id;
        vm.blog = {};

        init();
        initBlogPosts();
        function init() {
            $http.get(url + blogId)
                .then(function (result) {
                vm.blog = result.data;
                console.log(vm.blog);
            });
        }
        function initBlogPosts(){
            $http.get(url+blogId+'/blogposts').then(function(result){
                vm.blogPosts=result.data;
                console.log(vm.blogposts);
            })


        }





    }
})();