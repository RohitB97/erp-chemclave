'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth,$http,$state,$scope,$rootScope) {
    
    $scope.signupEvents = $rootScope.festEvents;
   
    $scope.register= function(form) {
      $scope.submitted = true;

      if (form.$valid) {

       $http.post("api/pendingusers/",$scope.user).success(function(){

           alert('Please fill the sheet above! Your account will be activated soon');
           $state.go('login');

       });

      }
    };

  }
}

angular.module('erpChemclaveApp')
  .controller('SignupController', SignupController);
