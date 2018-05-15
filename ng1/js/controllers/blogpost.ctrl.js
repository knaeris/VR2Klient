(function () {
    'use strict';

    angular.module('app').controller('BlogpostsController', Ctrl);

    function Ctrl($http, $routeParams) {
        var url = 'https://localhost:44305/api/blogposts/';
        var vm = this;
        var blogPostId=$routeParams.id;
        vm.blogpost = {};

        getBlogPostDetails();



        function getBlogPostDetails(){
            $http.get(url + blogPostId)
                .then(function(result){
                vm.blogpost=result.data;
                console.log(vm.blogpost);
            })
        }
        function postBlogData() {
            
        }


    }
})();
