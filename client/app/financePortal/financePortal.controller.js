'use strict';

(function(){

class FinancePortalComponent {
  constructor($scope,$http,$state,$rootScope) {
    var i,j;

    if($rootScope.CurrentUser().department != "finance")
    {
        $rootScope.warning();
        $state.go('main');
    }    

    $scope.user_list=[];
    $scope.acceptedList=[];
    $scope.pendingList=[];

    $http.get("http://chemclave.org/api/users/erp/getusers").success(function(response){
       $scope.user_list = response;
    });

    $scope.accept = function(user,index){
      $scope.user_list[index].status_check = true;
      $scope.user_list[index].accomodation_status = "Accepted";
      $scope.acceptedList.push(user._id); 
    };

    $scope.reject = function(user,index){
      $scope.user_list[index].status_check = false;
      $scope.user_list[index].accomodation_status = "Pending";
      $scope.pendingList.push(user._id);
    };

    $scope.saveChanges = function(){
      for(i=0;i<$scope.acceptedList.length;i++)
       {   
          $http.put("http://chemclave.org/api/users/accomAccept/"+$scope.acceptedList[i]).success(function(){
           });
       }

      for(j=0;j<$scope.pendingList.length;j++)
       {   
          $http.put("http://chemclave.org/api/users/accomPending/"+$scope.pendingList[j]).success(function(){
           });
       }

       alert("Click the button to load the changes");
       
       setTimeout(function(){location.reload();},2000);

    };

    $scope.undoChanges = function(){
      var choice = confirm("The changes will be reverted !");
       
       if(choice == true)
        location.reload();
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
