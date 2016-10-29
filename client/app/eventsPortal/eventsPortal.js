'use strict';

angular.module('erpChemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventsPortal', {
        url: '/eventsPortal',
        template: '<events-portal></events-portal>',
        authenticate: true
      });
  });
