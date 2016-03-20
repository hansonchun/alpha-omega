(function () {
	'use strict';

	angular
		.module('alpha-omega.controllers')
		.controller('ContactController', ContactController);

		ContactController.$inject = [];

		function ContactController() {

			var vm = this;

		   /**
		 	* @desc - This function shows the mail modal.
			*/
			vm.showModal = function() {
				console.log('hello');
				$('#mailModal').modal('show');
			}

		}
})();