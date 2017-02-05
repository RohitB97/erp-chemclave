'use strict';

(function(){

class EventsPortalComponent {
  constructor($scope,$http,$rootScope,$state,$stateParams) {
    $scope.launching_event={};
     
     $scope.launching_event.name = $stateParams.currentEvent;

      $http.get("/api/events/"+$stateParams.currentEvent).success(function(response){
         $scope.event = response;
         
         if(response.length>0)
          {

            if($scope.event[0].active == true)
              $('#toggleSwitch').attr( 'checked', true );
            else
              $('#toggleSwitch').removeAttr('checked'); 

           $scope.registrations = $scope.event[0].registrations;
          } 
         
         else{
            
           $http.post("/api/events/",$scope.launching_event).success(function(response){

            $http.get("/api/events/"+$scope.launching_event.name).success(function(response){
              $scope.event = response;
              $scope.registrations = $scope.event[0].registrations;
            });
          
           });
          }
       }); 

      $scope.info= function(){
       $scope.event[0].event_info = $("#info").val();
       $scope.event[0].registration_mode = $("#reg").val();

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

      $scope.FAQ= function(){

        $http.put("/api/events/"+$scope.event[0]._id,$scope.event[0]).success(function(response){
           
           $http.get("/api/events/"+$stateParams.currentEvent).success(function(response){
                $scope.event = response;
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
