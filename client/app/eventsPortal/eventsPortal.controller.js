'use strict';

(function(){

class EventsPortalComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('erpChemclaveApp')
  .component('eventsPortal', {
    templateUrl: 'app/eventsPortal/eventsPortal.html',
    controller: EventsPortalComponent,
    controllerAs: 'eventsPortalCtrl'
  });

})();
