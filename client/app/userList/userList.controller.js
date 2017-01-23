'use strict';

(function(){

class UserListComponent {
  constructor($scope, $http) {
    $http.get('http://www.chemclave.org/api/users/userCount').success(function(response){
        $scope.webUsers = response;
    });

    $scope.dataExport = function(){
      $("#userTable").table2excel({
       exclude: ".noExl",
       name: "Worksheet Name",
       filename: "ChemClave'17_Users"
      }); 
    };
  }
}

angular.module('erpChemclaveApp')
  .component('userList', {
    templateUrl: 'app/userList/userList.html',
    controller: UserListComponent,
    controllerAs: 'userListCtrl'
  });

})();
