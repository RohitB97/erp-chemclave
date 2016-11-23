'use strict';

(function(){

class EventsPortalComponent {
  constructor($scope,$http,$rootScope,$state,Auth) {
    $scope.launching_event={};

    if($rootScope.CurrentUser().department == "finance")
        $state.go('financePortal');

     $scope.launching_event.name = $rootScope.CurrentUser().department;

      $http.get("/api/events/"+$rootScope.CurrentUser().department).success(function(response){
         $scope.event = response;
         if(response.length>0)
          {
           $scope.event_added = true;
           $scope.registrations = $scope.event[0].registrations;
          } 
         else
          $scope.event_added = false;
      });

      $scope.info= function(){
       $scope.event[0].event_info = $("#info").val();

        $http.put("/api/events/"+$scope.event[0]._id,$scope.event[0]).success(function(response){
           console.log(response);
        });
      };

      $scope.PS= function(){
       $scope.event[0].problem_statement = $("#PS").val();

        $http.put("/api/events/"+$scope.event[0]._id,$scope.event[0]).success(function(response){
           console.log(response);
        });
      };

     $scope.event_launch = function(){
       $http.post("/api/events/",$scope.launching_event).success(function(response){
          $scope.event_added = true;
       });

       $http.get("/api/events/"+$rootScope.CurrentUser().department).success(function(response){
         $scope.event = response;
         $scope.registrations = $scope.event[0].registrations;
      });

     }; 
    
  }
}

angular.module('erpChemclaveApp')
  .component('eventsPortal', {
    templateUrl: 'app/eventsPortal/eventsPortal.html',
    controller: EventsPortalComponent,
    controllerAs: 'eventsPortalCtrl'
  });

})();
