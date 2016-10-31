'use strict';

angular.module('erpChemclaveApp', ['erpChemclaveApp.auth', 'erpChemclaveApp.admin',
    'erpChemclaveApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
