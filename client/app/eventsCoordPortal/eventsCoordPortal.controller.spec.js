'use strict';

describe('Component: EventsCoordPortalComponent', function () {

  // load the controller's module
  beforeEach(module('erpChemclaveApp'));

  var EventsCoordPortalComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EventsCoordPortalComponent = $componentController('eventsCoordPortal', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
