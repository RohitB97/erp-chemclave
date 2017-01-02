'use strict';

(function(){

class EventsCoordPortalComponent {
  constructor($scope, $cookies) {
       
       $scope.coordinatorEvents = $cookies.getObject('userEvents');
  }

}

angular.module('erpChemclaveApp')
  .component('eventsCoordPortal', {
    templateUrl: 'app/eventsCoordPortal/eventsCoordPortal.html',
    controller: EventsCoordPortalComponent,
    controllerAs: 'eventsCoordPortalCtrl'
  });

})();
