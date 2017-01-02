'use strict';

angular.module('erpChemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accommodations', {
        url: '/accommodations',
        template: '<accommodations></accommodations>',
        authenticate: 'coordinator'
      });
  });
