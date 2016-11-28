'use strict';

(function(){

class EventsCorePortalComponent {
  constructor($scope,$rootScope) {
     
     $scope.portalEvents = $rootScope.festEvents;

  }
}

angular.module('erpChemclaveApp')
  .component('eventsCorePortal', {
    templateUrl: 'app/eventsCorePortal/eventsCorePortal.html',
    controller: EventsCorePortalComponent,
    controllerAs: 'eventsCorePortalCtrl'
  });

})();
