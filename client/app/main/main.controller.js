'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $rootScope, $state, socket, Auth) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];

      $scope.roleCheck = function (){
        if($rootScope.Currentuser.role == 'coordinator')
          $scope.coordinator = true;
        if($rootScope.Currentuser.role == 'core')
          $scope.coordinator = false;
        $scope.userEvent = $rootScope.Currentuser.event;
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
