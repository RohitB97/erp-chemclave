'use strict';

(function(){

class AccommodationsComponent {
  constructor($scope, $http) {
    $http.get('http://www.chemclave.org/api/users/accommodations').success(function(response){
        $scope.accommodations = response;
    });

    $scope.exportData = function(){
      $("#dataTable").table2excel({
       exclude: ".noExl",
       name: "Worksheet Name",
       filename: "ChemClave2017_accommodations"
      }); 
    };

  }
}

angular.module('erpChemclaveApp')
  .component('accommodations', {
    templateUrl: 'app/accommodations/accommodations.html',
    controller: AccommodationsComponent,
    controllerAs: 'accommodationsCtrl'
  });

})();
