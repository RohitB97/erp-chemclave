'use strict';

angular.module('erpChemclaveApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main></main>',
      authenticate: 'coordinator'
    });
  });
