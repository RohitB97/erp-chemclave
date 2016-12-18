'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $state, $cookies) {
 
      $scope.roleCheck = function (){
        if($cookies.get('userRole') == 'coordinator')
          $scope.coordinator = true;
        else
          $scope.coordinator = false;
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
