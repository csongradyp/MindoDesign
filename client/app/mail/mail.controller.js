'use strict';

angular.module('mindodesignApp')
  .controller('MailCtrl', function ($scope, Modal) {
  	
  	$scope.submitted=false;

	$scope.reset = function() {
		$scope.user = {};
	};

	$scope.submitModal = Modal.confirm.notify(function(user) {
 		$scope.reset();
    });

    var modalSubscription = $scope.$on('modal.hide',function(){
		$scope.reset();
	});

	 $scope.$on("$destroy", function() {
		modalSubscription();
	});

	$scope.reset();

  });
