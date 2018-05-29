(function () {
    'use strict';

    angular.module('app').controller('CreateBlogController', Ctrl);

    function Ctrl($http){

        var vm = this;
        var urlCat = 'https://localhost:44305/api/blogcategories/';
        var urlBlogs = 'https://localhost:44305/api/blogs';

        this.categories = [];
        this.blogCategoryName='';
        this.blogTitle='';
        this.blogDescription='';
        this.blogCategoryId='';


        vm.submitData = submitData;

        initCat();

        function initCat() {
            $http.get(urlCat).then(function (result) {
                vm.categories = result.data;
                console.log(vm.categories);
            });
        }

        function submitData() {
            var blog = {
                blogTitle: this.blogTitle,
                blogDescription: this.blogDescription,
                blogCategoryId:this.blogCategoryId




            }
            console.log(blog)
            alert(sessionStorage.getItem("accessToken"));
            return $http.post(urlBlogs, blog, {headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}})
                .then(function(response){
                if(response.status === 200) {
                    return response.data;
                }
            }, function(error) {
                console.log(error)
            });;

          




        }}

})();