(function () {
    'use strict';

    angular.module('app').config(RouteConfig);

    function RouteConfig($routeProvider) {

        $routeProvider
            .when('/Categories', {
            templateUrl : 'views/categories.html',
            controller : 'CategoriesController',
            controllerAs : 'vm'
        }).when('/all-blogs', {
            templateUrl : 'views/all-blogs.html',
            controller : 'AllBlogsController',
            controllerAs : 'vm'
        }).when('/main', {
            templateUrl : 'views/main.html',
            controller :'MainController'
          //  controllerAs : 'vm'
        }).when('/profile', {
            templateUrl : 'views/profile.html',
            controller : 'profileController',
            controllerAs : 'vm'
        }).when('/blog/:id', {
            templateUrl : 'views/blogview.html',
            controller : 'BlogViewController',
            controllerAs : 'vm'
        }).when('/login', {
            templateUrl : 'views/login.html',
            controller : 'LoginController',
            controllerAs: 'vm'
        }).when('/blogs/:blogId/blogposts/:blogPostId', {
            templateUrl : 'views/blogpost.html',
            controller : 'BlogpostsController',
            controllerAs : 'vm'
        }).when('/register', {
            templateUrl : 'views/register.html',
            controller : 'RegisterController',
            controllerAs: 'vm'
        }).when('/createblog', {
            templateUrl : 'views/createblog.html',
            controller : 'CreateBlogController',
            controllerAs: 'vm'
        }).when('/createpost', {
            templateUrl : 'views/createpost.html',
            controller : 'CreatePostController',
            controllerAs: 'vm'
        }).when('/myblogs', {
            templateUrl : 'views/myblogs.html',
            controller : 'MyBlogsController',
            controllerAs: 'vm'
        }).when('/categories/:id/blogs', {
            templateUrl : 'views/blogsincategories.html',
            controller : 'BlogsInCategoriesController',
            controllerAs: 'vm'
        }).when('/logout', {
            templateUrl : 'views/logout.html',
            controller : 'LogOutController',
            controllerAs: 'vm'
        }).when('/editblog/:blogId', {
            templateUrl : 'views/editblog.html',
            controller : 'EditBlogController',
            controllerAs: 'vm'
        }).otherwise('/main');

    }

})();