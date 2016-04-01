(function() {

	'use strict';

	angular
		.module('alpha-omega', [
			'ngRoute',
			'alpha-omega.controllers',
			'alpha-omega.components',
			'ui.bootstrap',
			])
		.config(config);


	function config($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'app/views/home.html',
				controller: 'HomeController',
				controllerAs: 'HomeCtrl'
			})
			.when('/products', {
				templateUrl: 'app/views/products.html'
			})
			.when('/partners', {
				templateUrl: 'app/views/partners.html',
				controller: 'PartnersController',
				controllerAs: 'PartnersCtrl'
			})
			.when('/contact', {
				templateUrl: 'app/views/contact.html',
				controller: 'ContactController',
				controllerAs: 'ContactCtrl'
			})
			.otherwise({
				redirectTo: '/home'
			})
	}


})();