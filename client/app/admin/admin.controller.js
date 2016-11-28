'use strict';

(function() {

  class AdminController {
    constructor(User,Auth,$scope,$http,$state) {
      // Use the User $resource to fetch all users
      this.users = User.query();
      
      $http.get("api/pendingusers/").success(function(response){
         $scope.pendingUsers = response;
      });

     $scope.acceptUser = function(user){

      if(user.department == 'finance'){
        Auth.createUser({
          name: user.name,
          email: user.email,
          department: user.department,
          role: user.role,
          password: user.password
        }).then(() => {
            $http.delete("api/pendingusers/"+user._id).success(function(){

            });
           alert('Finance User has been accepted!'); 
           location.reload();
        });
      }

      else {
       Auth.createUser({
          name: user.name,
          email: user.email,
          department: user.department,
          event: user.event,
          role: user.role,
          password: user.password
        }).then(() => {
            $http.delete("api/pendingusers/"+user._id).success(function(){

            });
           alert('Events User has been accepted!'); 
           location.reload();
        });

       } 
     
     };

    }

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  angular.module('erpChemclaveApp.admin')
    .controller('AdminController', AdminController);
})();
