'use strict';

angular.module('erpChemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventsCorePortal', {
        url: '/eventsCorePortal/:currentEvent',
        template: '<events-core-portal></events-core-portal>',
        authenticate: 'core'
      });
  });
