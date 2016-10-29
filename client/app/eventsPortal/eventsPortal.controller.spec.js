'use strict';

describe('Component: EventsPortalComponent', function () {

  // load the controller's module
  beforeEach(module('erpChemclaveApp'));

  var EventsPortalComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EventsPortalComponent = $componentController('eventsPortal', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
