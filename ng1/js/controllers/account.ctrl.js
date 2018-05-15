(function () {
        'use strict';
        var url = 'https://localhost:44305/api/';
        angular
            .module('app')
            .controller('RegisterController', RegCtrl)
            .config(function ($httpProvider) {
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        });


        function RegCtrl($http, $scope) {
            $scope.registerUser = registerUser;

            function registerUser() {
                if ($scope.Password !== $scope.ConfirmPassword) {
                    alert("Passwords did not match!");
                    return;
                }

                var newUser = {
                    Email: $scope.email,
                    Username: $scope.username,
                    Password: $scope.password,
                    ConfirmPassword: $scope.confirmPassword
                }
                console.log(newUser);
                $http.post(url + 'Account/Register', newUser).success(function(response){

                });



            }
        }

        angular.module('app').controller('LoginController', LogCtrl).config(function ($httpProvider) {
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        });

        function LogCtrl($http,$location, $scope){
            var tokenKey= "accessToken";
            $scope.logUser=logUser;

            function logUser() {
                var token = sessionStorage.getItem(tokenKey);
                var headers = {};
                if (token) {

                headers.Authorization = 'Bearer ' + token;
            }

                var data = {
                    email: $scope.email,
                    password: $scope.password
                };
                console.log(data);
                console.log(url);

                $.ajax({
                    type:'POST',
                    url: url+'security/gettoken',
                    contentType:'application/json; chartset=utf-8',
                    data:JSON.stringify(data)
                })
                    .done(function(json){
                        console.log(url);
                        console.log(JSON.stringify(json, null, '  '), true);
                        sessionStorage(tokenKey, json.token);
                    })
                    .fail();
            }
        }

    }
    )();