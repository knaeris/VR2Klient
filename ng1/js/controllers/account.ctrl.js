(function () {
        'use strict';

        angular.module('app').controller('RegisterController', RegCtrl);
        angular.module('app').controller('LoginController', LogCtrl);
        angular.module('app').controller('LogOutController', LogOutCtrl);


        var url = 'https://localhost:44305/api/';
        var tokenKey = "accessToken";
        var token = sessionStorage.getItem(tokenKey);
        var headers = {};
        if (token) {
            headers.Authorization = 'Bearer' + token;
        }

        function RegCtrl($http, $scope) {
            $scope.registerUser = registerUser;

            function registerUser() {
                var model = {
                    Email: $scope.Email,
                    Password: $scope.Password,
                    ConfirmPassword: $scope.ConfirmPassword
                };
                $http({
                    url: url + 'Account/register',
                    method: 'POST',
                    data: model,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                    });
                console.log(model);
                }
        }


        function LogCtrl($http, $location, $scope) {


            $scope.logUser = logUser;

            function logUser() {

                var data = {
                    Email: $scope.Email,
                    Password: $scope.Password,

                };
                console.log(data);


                $http({

                    url: url + 'security/gettoken',
                    method: 'POST',
                    data: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Accept': 'application/json'

                    }

                }).then(function (json) {
                    alert("User logged in!");
                    console.log(JSON.stringify(json, null, '  '), true);
                    sessionStorage.setItem(tokenKey, json.token);
                    $location.path('#/main');

                }).catch(function (showError) {
                    console.log(showError);
                })


            }
        }

        function LogOutCtrl() {
            $scope.LogOut = LogOut;

            function LogOut() {
                sessionStorage.removeItem(tokenKey);
            }
        }




    }
)();