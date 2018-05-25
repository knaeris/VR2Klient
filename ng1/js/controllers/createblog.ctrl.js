(function () {
    'use strict';

    angular.module('app').controller('CreateBlogController', Ctrl);

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

            var blogPost={
                blogPostTitle:this.blogPostTitle,
                blogPostContent:this.blogPostContent
            }

          //  $http.post(urlBlogPosts, vm.blogPost)



            console.log(blogPost)



try {
    $http({
        url: urlBlogPosts,
        method: 'POST',
        data: blogPost,
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
            // Note the appropriate header
        }
    }).success(function(response) {  console.log("success"); /* do something here */ });
   // $http.post(urlBlogPosts, blogPost)
    //.then($location.path('/
}
catch(err){
                console.log(err.toString())
}
        }

    }

})();