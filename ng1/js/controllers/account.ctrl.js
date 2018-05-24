(function () {
        'use strict';
        var url = 'https://localhost:44305/api/';
        angular
            .module('app')
            .controller('RegisterController', RegCtrl);



        function RegCtrl($http, $scope) {
            $scope.registerUser = registerUser;

            function registerUser() {
                var model = {
                    Email: $scope.Email,
                    Password: $scope.Password,
                    ConfirmPassword: $scope.ConfirmPassword
                };
                $http({
                    url: url + 'Account/register', //change to your api controller url
                    method: 'POST',
                    data: model, //pass a model as RegisterViewModel
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept':'application/json'
                        // Note the appropriate header
                    }

                });

console.log(model);


            }
        }

        angular.module('app').controller('LoginController', LogCtrl);

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