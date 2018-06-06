(function () {
    'use strict';

    angular.module('app').controller('CreatePostController', Ctrl);

    function Ctrl($http, $location, $routeParams){

        var vm = this;


        var urlBlog='https://localhost:44305/api/blogs/';
        var urlMyblogs='https://localhost:44305/api/myblogs/';
        this.blog = '';
        this.blogId='';
        this.blogPostTitle='';

        this.blogPostContent='';
        vm.blog = {};
        vm.submitData = submitData;

        initBlogName();

        function initBlogName() {
            $http.get(urlMyblogs,{headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function (result) {
                vm.blogs = result.data;

            });
        }

        function submitData() {

            var blogPost={
                blogPostTitle:this.blogPostTitle,
                blogPostContent:this.blogPostContent,
                blogId:this.blogId
            }
            console.log(blogPost)
            try {
                $http({
                    url: urlBlog+vm.blogId+'/blogposts',
                    method: 'POST',
                    data: blogPost,
                    headers:
                        {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}
                }).then(function() {
                    alert("Postitatud")
                    window.location.href='#/blog/'+vm.blogId});

            }
            catch(err){
                console.log(err)
            }
        }

    }

})();