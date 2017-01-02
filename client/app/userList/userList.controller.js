'use strict';

(function(){

class UserListComponent {
  constructor($scope, $http) {
    $http.get('http://chemclave.org/api/users/userCount').success(function(response){
        $scope.webUsers = response;
    });
  }
}

angular.module('erpChemclaveApp')
  .component('userList', {
    templateUrl: 'app/userList/userList.html',
    controller: UserListComponent,
    controllerAs: 'userListCtrl'
  });

})();
