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

			var dictionary = {
				''
			}


		   /*
			* @desc - This function toggles the language between EN and CH
			*
			*/

			vm.ToggleLanguage = function() {
				console.log('Hello')
			}

		}

})();