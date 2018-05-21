(function () {
    'use strict';

    angular.module('app').controller('CreatePostController', Ctrl);

    function Ctrl($http, $location, $routeParams){

        var vm = this;

        var urlBlogPosts = 'https://localhost:44305/api/blogposts/';
        var urlBlog='https://localhost:44305/api/blogs/';
        this.blog = '';
        var blogId=$routeParams.id;
        this.blogPostTitle='';

        this.blogPostContent='';
        vm.blog = {};
        vm.submitData = submitData;

        initBlogName();

        function initBlogName() {
            $http.get(urlBlog+blogId).then(function (result) {
                vm.blog = result.data;
                console.log(vm.blog);
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