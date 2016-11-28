'use strict';

(function(){

class EventsPortalComponent {
  constructor($scope,$http,$rootScope,$state,Auth,$stateParams) {
    $scope.launching_event={};

    if($rootScope.CurrentUser().department == "finance")
    {
        $rootScope.warning();
        $state.go('main');
    }    
     
     $scope.launching_event.name = $stateParams.currentEvent;

      $http.get("/api/events/"+$stateParams.currentEvent).success(function(response){
         $scope.event = response;
         if(response.length>0)
          {
            
            if($scope.event[0].active == true)
              $('#toggleSwitch').attr( 'checked', true );
            else
              $('#toggleSwitch').removeAttr('checked'); 
           
           $scope.event_added = true;
           $scope.registrations = $scope.event[0].registrations;
          } 
         else
          $scope.event_added = false;
       }); 

      $scope.info= function(){
       $scope.event[0].event_info = $("#info").val();

        $http.put("/api/events/"+$scope.event[0]._id,$scope.event[0]).success(function(response){
           
           $http.get("/api/events/"+$stateParams.currentEvent).success(function(response){
               $scope.event = response;
            });
        });

      };

      $scope.PS= function(){
       $scope.event[0].problem_statement = $("#PS").val();

        $http.put("/api/events/"+$scope.event[0]._id,$scope.event[0]).success(function(response){
           
           $http.get("/api/events/"+$stateParams.currentEvent).success(function(response){
                $scope.event = response;
            });
        });       

      };

     $scope.event_launch = function(){
       $http.post("/api/events/",$scope.launching_event).success(function(response){
          $scope.event_added = true;

          $http.get("/api/events/"+$scope.launching_event).success(function(response){
             $scope.event = response;
             $scope.registrations = $scope.event[0].registrations;
           });
       });
     };

     $scope.export = function(){
      $("#tableData").table2excel({
       exclude: ".noExl",
       name: "Worksheet Name",
       filename: $stateParams.currentEvent + "_participants"
      }); 
    };

    $scope.toggleStatus = function(){

       if($('#toggleSwitch').is(":checked")){ 
            $scope.event[0].active = true;
          }
        else
            $scope.event[0].active = false;
       
      $http.put("/api/events/"+$scope.event[0]._id,$scope.event[0]).success(function(response){
           
          $http.get("/api/events/"+$stateParams.currentEvent).success(function(response){
             $scope.event = response;       
             $scope.registrations = $scope.event[0].registrations;
          });
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
