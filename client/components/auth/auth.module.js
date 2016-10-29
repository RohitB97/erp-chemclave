'use strict';

angular.module('erpChemclaveApp.auth', ['erpChemclaveApp.constants', 'erpChemclaveApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
