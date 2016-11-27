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

    $scope.signupOptions = $rootScope.festEvents;
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          department: this.user.department,
          role: this.user.role,
          password: this.user.password
        })
        .then(() => {
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
