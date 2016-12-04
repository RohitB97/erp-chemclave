'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $state, $cookies) {
 
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
