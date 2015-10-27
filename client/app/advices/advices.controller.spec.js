'use strict';

describe('Controller: AdvicesCtrl', function () {

  // load the controller's module
  beforeEach(module('mindodesignApp'));

  var AdvicesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdvicesCtrl = $controller('AdvicesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
