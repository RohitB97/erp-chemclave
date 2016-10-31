'use strict';

(function(){

class EventsPortalComponent {
  constructor($scope,$http,Auth) {

     $scope.launching_event = Auth.getCurrentUser().department;

     $scope.event_launch = function(){
       $http.post("/api/events/",$scope.launching_event).success(function(){
          $scope.event_added = true;
       });
     };

      $http.get("/api/events/"+Auth.getCurrentUser().department).success(function(){
         $scope.event = response;
         if(response.length>0)
          $scope.event_added = true;
         else
          $scope.event_added = false;
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
