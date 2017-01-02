'use strict';

angular.module('erpChemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '/userList',
        template: '<user-list></user-list>',
        authenticate: 'coordinator'
      });
  });
