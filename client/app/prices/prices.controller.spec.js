'use strict';

describe('Controller: PricesCtrl', function () {

  // load the controller's module
  beforeEach(module('mindodesignApp'));

  var PricesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PricesCtrl = $controller('PricesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
