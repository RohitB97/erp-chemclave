'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $rootScope, $state, socket, Auth) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
     
     if($rootScope.isLoggedIn()){
         if($rootScope.CurrentUser().department == "finance")
           $state.go('financePortal');
          else
           $state.go('eventsPortal'); 

       }
    }

    /*$onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }*/
  }

  angular.module('erpChemclaveApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
