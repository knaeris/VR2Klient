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
                    })


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
                    alert(data.Email + " logged in!");

                    sessionStorage.setItem("accessToken", json.data.token);

                    $location.path('#/main');
                    document.getElementById("menu-profile").style.visibility="visible";
                    document.getElementById("menu-createpost").style.visibility="visible";
                    document.getElementById("menu-logout").style.visibility="visible";
                    document.getElementById("menu-login").style.visibility="hidden";



                }).catch(function (showError) {
                    console.log(showError);
                })


            }
        }

        function LogOutCtrl($scope) {
            $scope.LogOut = LogOut;


            function LogOut() {



                if (! removeExistingItem(tokenKey))
                    console.log("Error");
                else {
                    alert(" logged out!");
                    window.location.href='#/login'
                    document.getElementById("menu-profile").style.visibility = "hidden";
                    document.getElementById("menu-createpost").style.visibility = "hidden";
                    document.getElementById("menu-logout").style.visibility = "hidden";
                    document.getElementById("menu-login").style.visibility = "visible";

                }

                function removeExistingItem(key) {
                    if (sessionStorage.getItem(key) === null)
                        return false;
                    sessionStorage.removeItem(key);
                    return true;
                }
            }

        }




    }
)();