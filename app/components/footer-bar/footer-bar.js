(function() {

	'use strict';

	angular
		.module('alpha-omega.components')
		.directive('footerBar', footerBar)

		function footerBar() {
			var directive = {
				templateUrl: '/app/components/footer-bar/footer-bar.html',
				controller: FooterBarController,
				controllerAs: 'footerBarCtrl',
				restrict: 'E',
				bindToController: true
			};

			return directive
		}

		FooterBarController.$inject = [];

		function FooterBarController() {
			var vm = this;
		}

})();