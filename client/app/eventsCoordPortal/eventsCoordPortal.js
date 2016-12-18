'use strict';

angular.module('erpChemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventsCoordPortal', {
        url: '/eventsCoordPortal',
        template: '<events-coord-portal></events-coord-portal>',
        department: 'events',
        authenticate: 'coordinator'
      });
  });
