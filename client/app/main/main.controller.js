'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $state, $cookies) {
 
    $scope.role_Check = function (){
        if($cookies.get('userRole') == 'coordinator')
          $scope.coordinator = true;
        else
          $scope.coordinator = false;
      };

      $scope.role_Check();

    }
  }

  angular.module('erpChemclaveApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
