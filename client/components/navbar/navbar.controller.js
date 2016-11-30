'use strict';

class NavbarController {
  //start-non-standard

  isCollapsed = true;
  //end-non-standard

  constructor($rootScope,Auth) {
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.isLoggedIn = Auth.isLoggedIn;
  }

}

angular.module('erpChemclaveApp')
  .controller('NavbarController', NavbarController);
