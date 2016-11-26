'use strict';

angular.module('erpChemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventsPortal', {
        url: '/eventsPortal/:currentEvent',
        template: '<events-portal></events-portal>',
        authenticate: 'coordinator'
      });
  });
