'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $rootScope, $state, socket, Auth, $cookies) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = []; 

      $scope.roleCheck = function (){
        if($cookies.get('userRole') == 'coordinator')
          $scope.coordinator = true;
        if($cookies.get('userRole') == 'core')
          $scope.coordinator = false;
        $scope.userEvent = $cookies.get('userEvent');
      };

      $scope.roleCheck();

    }
  }

  angular.module('erpChemclaveApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
