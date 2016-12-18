'use strict';

(function(){

class EventsCoordPortalComponent {
  constructor($scope, Auth) {
      $scope.coordinatorEvents = Auth.getCurrentUser().coordEvents;
  }
}

angular.module('erpChemclaveApp')
  .component('eventsCoordPortal', {
    templateUrl: 'app/eventsCoordPortal/eventsCoordPortal.html',
    controller: EventsCoordPortalComponent,
    controllerAs: 'eventsCoordPortalCtrl'
  });

})();
