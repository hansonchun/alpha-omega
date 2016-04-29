(function () {
	'use strict';

	angular
		.module('alpha-omega.controllers')
		.controller('ContactController', ContactController);

		ContactController.$inject = [];

		function ContactController() {

			var vm = this;

			vm.contact = {
				company: '',
				name: '',
				email: '',
				phone: '', 
				comments: '',
			}

			vm.SubmitForm = function() {
				console.log(vm.contact)
			}


		}
})();