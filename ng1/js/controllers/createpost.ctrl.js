(function () {
    'use strict';

    angular.module('app').controller('CreatePostController', Ctrl);

    function Ctrl($http){

        var vm = this;

        //list of variables and urls
        var urlBlog='https://localhost:44305/api/blogs/';
        var urlMyblogs='https://localhost:44305/api/myblogs/';
        this.blog = '';
        this.blogId='';
        this.blogPostTitle='';
        this.blogPostContent='';

        vm.blog = {};
        vm.submitData = submitData;

        initBlogName();

        //Gets the token
        function initBlogName() {
            $http.get(urlMyblogs,{headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function (result) {
                vm.blogs = result.data;

            });
        }

        //function to create a blog post
        function submitData() {

            var blogPost={
                blogPostTitle:this.blogPostTitle,
                blogPostContent:this.blogPostContent,
                blogId:this.blogId
            };

            //constructing the address for certain post by getting blog id
            // and posting it with auth. token in the header
            try {
                $http({
                    url: urlBlog+vm.blogId+'/blogposts',
                    method: 'POST',
                    data: blogPost,
                    headers:
                        {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}
                }).then(function() {
                    alert("Postitatud");
                    window.location.href='#/blog/'+vm.blogId}); //redirection
            }
            catch(err){
                console.log(err)
            }
        }

    }

})();