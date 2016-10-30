'use strict';

(function(){

class EventsPortalComponent {
  constructor($scope,$http,Auth) {
      $http.get("/api/events/"+Auth.getCurrentUser().department).success(function(){
         $scope.event = response;
      });
    
  }
}

angular.module('erpChemclaveApp')
  .component('eventsPortal', {
    templateUrl: 'app/eventsPortal/eventsPortal.html',
    controller: EventsPortalComponent,
    controllerAs: 'eventsPortalCtrl'
  });

})();
