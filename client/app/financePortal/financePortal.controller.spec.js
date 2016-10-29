'use strict';

describe('Component: FinancePortalComponent', function () {

  // load the controller's module
  beforeEach(module('erpChemclaveApp'));

  var FinancePortalComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    FinancePortalComponent = $componentController('financePortal', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
