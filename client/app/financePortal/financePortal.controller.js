'use strict';

(function(){

class FinancePortalComponent {
  constructor($scope,$http,$state) {

    var i,j;    

    $scope.user_list=[];
    $scope.acceptedList=[];
    $scope.pendingList=[];

    $http.get("http://chemclave.org/api/users/erp/finance").success(function(response){
       $scope.user_list = response;
    });

    $scope.accept = function(user,index){
      $scope.user_list[index].accomodation_status = "Approved";
      $scope.acceptedList.push(user._id); 
    };

    $scope.reject = function(user,index){
      $scope.user_list[index].accomodation_status = "Rejected";
      $scope.rejectedList.push(user._id);
    };

    $scope.saveChanges = function(){
      for(i=0;i<$scope.acceptedList.length;i++)
       {   
          $http.put("http://chemclave.org/api/users/accomAccept/"+$scope.acceptedList[i], {}).success(function(){
           });
       }

      for(j=0;j<$scope.rejectedList.length;j++)
       {   
          $http.put("http://chemclave.org/api/users/accomReject/"+$scope.rejectedList[j], {}).success(function(){
           });
       }

       alert("Please wait till the changes are loaded");
       
       setTimeout(function(){$state.reload();},3000);

    };

    $scope.undoChanges = function(){
      var choice = confirm("The changes will be reverted !");
       
       if(choice == true)
        $state.reload();
    };

    //Code for finance portal ends here
  }
}

angular.module('erpChemclaveApp')
  .component('financePortal', {
    templateUrl: 'app/financePortal/financePortal.html',
    controller: FinancePortalComponent,
    controllerAs: 'financePortalCtrl'
  });

})();
