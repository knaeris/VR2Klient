(function () {
    'use strict';

    angular.module('app').controller('BlogpostsController', BPCtrl);


    function BPCtrl($http, $routeParams) {
        var url = 'https://localhost:44305/api/blogs/';
        var vm = this;
        var blogPostId = $routeParams.blogPostId;
        var blogId = $routeParams.blogId;
        vm.blogpost = {};
        vm.comments=[];
        this.blogPostCommentContent='';
        getBlogPostDetails();
        getBlogPostComments();
        vm.commentPost=commentPost;

        function getBlogPostDetails(){
            $http.get(url + blogId +'/blogposts/' + blogPostId)
                .then(function(result){
                vm.blogpost=result.data;
                console.log(vm.blogpost);
            });

        }
        function getBlogPostComments() {
            $http.get(url + blogId + '/blogposts/' + blogPostId + '/blogpostcomments')
                .then(function (result) {
                    vm.comments = result.data;
                    console.log(vm.comments);
                })
        }
        function commentPost(){

            var comment={
                blogPostCommentContent:this.blogPostCommentContent,
                blogPostId:blogPostId
            }

            return $http.post(url+blogId+'/blogposts/'+ blogPostId+'/blogpostcomments', comment,
                {headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function(){
                    getBlogPostComments();

                }, function(error) {
                    console.log(error)
                });

        }

    }

})();
