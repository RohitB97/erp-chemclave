'use strict';

angular.module('erpChemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('financePortal', {
        url: '/financePortal',
        template: '<finance-portal></finance-portal>',
        authenticate: 'coordinator'
      });
  });
