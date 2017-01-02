'use strict';

describe('Component: AccommodationsComponent', function () {

  // load the controller's module
  beforeEach(module('erpChemclaveApp'));

  var AccommodationsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AccommodationsComponent = $componentController('accommodations', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
