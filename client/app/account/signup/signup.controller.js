'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth,$http,$state,$scope,$rootScope) {
    $scope.events=[];
    
    $scope.signupEvents = $rootScope.festEvents;
   
    $scope.register= function(form) {
      $scope.submitted = true;

      console.log($scope.events);

      if($scope.user.department == 'qms')
         $scope.user.event = 'All Events';

      if($scope.user.department == 'events' && $scope.user.role == 'core') 
         $scope.user.event = 'All Events';

      if($scope.user.department == 'events' && $scope.user.role == 'coordinator')
          $scope.user.coordEvents = $scope.events;
          

      if (form.$valid) {

        $('#status').css('display','block');

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
