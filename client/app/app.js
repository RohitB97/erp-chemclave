'use strict';

angular.module('erpChemclaveApp', ['erpChemclaveApp.auth', 'erpChemclaveApp.admin',
    'erpChemclaveApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .controller("indexCtrl",["$rootScope","Auth","$state",function($rootScope,Auth,$state){
      
      $rootScope.festEvents = [
          'Chem E Debate',
          'Censino',
          'Paper & Poster presentation',
          'Cheminnovate',
          'Project X',
          'Disaster scene investigation',
          'Chemical Entrepreneurship',
          'Aqua Rocket',
          'Chemical X',
          'Open quiz',
          'Puzzle champ',
          'Chemieconnexion',
          'CheQ',
          'Chem E Dart',
          'ChemAdmad',
          'Treasure hunt',
          'Aspen Plus + Simulation Competition',
          'R programming + Competition',
          'Comsol workshop',
          'Art of Research Writing',
          'Forensics Workshop'
        ];
  
  }]); 
