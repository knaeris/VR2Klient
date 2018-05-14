(function () {
    'use strict';

    angular.module('app').config(RouteConfig);

    function RouteConfig($routeProvider) {

        $routeProvider.when('/New', {
            templateUrl : 'views/new.html',
            controller : 'NewController',
            controllerAs : 'vm'
        }).when('/Categories', {
            templateUrl : 'views/categories.html',
            controller : 'CategoriesController',
            controllerAs : 'vm'
        }).when('/all-blogs', {
            templateUrl : 'views/all-blogs.html',
            controller : 'AllBlogsController',
            controllerAs : 'vm'
        }).when('/main', {
            templateUrl : 'views/main.html',
            controller : 'MainController',
            controllerAs : 'vm'
        }).when('/latest-blogposts', {
            templateUrl : 'views/latest-blogposts.html',
            controller : 'latestBlogpostsController',
            controllerAs : 'vm'
        }).when('/blogview/:id', {
            templateUrl : 'views/blogview.html',
            controller : 'BlogViewController',
            controllerAs : 'vm'
        }).when('/login', {
            templateUrl : 'views/login.html',
            controller : 'LoginController',
            controllerAs: 'vm'
        }).when('/blogpost/:id', {
            templateUrl : 'views/blogpost.html',
            controller : 'BlogpostsController',
            controllerAs : 'vm'
        }).otherwise('/main');

    }

})();