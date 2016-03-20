(function() {

	'use strict';

	angular
		.module('alpha-omega.components')
		.directive('navBar', navBar)

		function navBar() {

			var directive = {
				templateUrl: '/app/components/navbar/navbar.html',
				controller: NavBarController,
				controllerAs: 'navBarCtrl',
				restrict: 'E',
				bindToController: true
			};

			return directive;
		} 

		// Inject dependencies here
		NavBarController.$inject = [];

		function NavBarController() {
			var vm = this;
		}

})();