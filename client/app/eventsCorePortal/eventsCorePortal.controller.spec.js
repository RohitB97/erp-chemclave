'use strict';

describe('Component: EventsCorePortalComponent', function () {

  // load the controller's module
  beforeEach(module('erpChemclaveApp'));

  var EventsCorePortalComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EventsCorePortalComponent = $componentController('eventsCorePortal', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
