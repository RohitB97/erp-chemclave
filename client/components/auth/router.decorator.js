'use strict';

(function() {

  angular.module('erpChemclaveApp.auth')
    .run(function($rootScope, $state, Auth) {
      // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
      $rootScope.$on('$stateChangeStart', function(event, next) {
        if (!next.authenticate) {
          return;
        }

        if (typeof next.authenticate === 'string') {
          Auth.hasRole(next.authenticate, _.noop)
            .then(has => {
              if (has) {
                return;
              }

              event.preventDefault();
              return Auth.isLoggedIn(_.noop)
                .then(is => {
                  $state.go(is ? 'main' : 'login');
                });
            });
        } else {
          Auth.isLoggedIn(_.noop)
            .then(is => {
              if (is) {
                return 
                 if($rootScope.CurrentUser().department == "finance")
                  $state.go('financePortal');
                 else
                  $state.go('eventsPortal');
              }

              event.preventDefault();
              $state.go('main');
            });
        }
      });
    });
})();
