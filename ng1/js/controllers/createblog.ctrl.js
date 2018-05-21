(function () {
    'use strict';

    angular.module('app').controller('CreateBlogController', Ctrl)
        .config(function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });

    function Ctrl($http, $location){

        var vm = this;
        var urlCat = 'https://localhost:44305/api/blogcategories/';
        var urlBlogs = 'https://localhost:44305/api/blogs';
        var urlBlogPosts = 'https://localhost:44305/api/blogposts';
        this.categories = [];
        //this.blogPost = '';
        this.blogPostTitle='';
        this.blogPostContent='';
        vm.blog = {};
        vm.submitData = submitData;

        initCat();

        function initCat() {
            $http.get(urlCat).then(function (result) {
                vm.categories = result.data;
                console.log(vm.categories);
            });
        }

        function submitData() {
<<<<<<< HEAD
            var blogPost={
                blogPostTitle:this.blogPostTitle,
                blogPostContent:this.blogPostContent
            }
=======
            $http.post(urlBlogPosts, vm.blogPost)
>>>>>>> 8b7833bbcd930374d7a735631426406f58366c4f


            console.log(blogPost)



try {
    $http.post(urlBlogPosts, blogPost)
    //.then($location.path('/
}
catch(err){
                console.log(err.toString())
}
        }

    }

})();