'use strict';

describe('Component: UserListComponent', function () {

  // load the controller's module
  beforeEach(module('erpChemclaveApp'));

  var UserListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UserListComponent = $componentController('userList', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
