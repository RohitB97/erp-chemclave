'use strict';

class NavbarController {
  //start-non-standard

  isCollapsed = true;
  //end-non-standard

  constructor($rootScope,Auth) {
    $rootScope.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    $rootScope.CurrentUser = Auth.getCurrentUser;
  }

}

angular.module('erpChemclaveApp')
  .controller('NavbarController', NavbarController);
