'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state,$scope,$rootScope) {
    this.Auth = Auth;
    this.$state = $state;
    this.$rootScope = $rootScope;
    $scope.trueAccess = false;

  $scope.accessCheck= function(){
      if($scope.accessKey == "finance@CC" || $scope.accessKey == "events21@CC")
      $scope.trueAccess = true;
     setTimeout(function(){alert('Your session will expire in 5 minutes');},1000);
     setTimeout(function(){location.reload();},300000);
   };

    $scope.signupOptions = [
          'Chem E Debate',
          'Censino',
          'Paper & Poster presentation',
          'Cheminnovate',
          'Project X',
          'Disaster scene investigation',
          'Chemical Entrepreneurship',
          'Aqua Rocket',
          'Chemical X',
          'Open quiz',
          'Puzzle champ',
          'Chemieconnexion',
          'CheQ',
          'Chem E Dart',
          'ChemAdmad',
          'Treasure hunt',
          'Aspen Plus + Simulation Competition',
          'R programming + Competition',
          'Comsol workshop',
          'Art of Research Writing',
          'Forensics Workshop'];
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          department: this.user.department,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to home
         /* if(this.$rootScope.CurrentUser().department == "finance")
           this.$state.go('financePortal');
          else
           this.$state.go('eventsPortal');*/
         this.$state.go("signupsuccess");

        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });

    }
  }
}

angular.module('erpChemclaveApp')
  .controller('SignupController', SignupController);
