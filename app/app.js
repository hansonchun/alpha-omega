(function() {

	'use strict';

	angular
		.module('alpha-omega', [
			'ngRoute',
			'pascalprecht.translate',
			'alpha-omega.controllers',
			'alpha-omega.components',
			'ui.bootstrap',
			])
		.config(config);


	function config($routeProvider, $translateProvider) {
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
			});

		$translateProvider
			.translations('en', {
				'navbar': {
					ABOUT: 'ABOUT',
					PRODUCTS: 'PRODUCTS',
					SERVICES: 'SERVICES',
					PARTNERS: 'PARTNERS',
					CONTACT: 'CONTACT'
				},

				'partners': {
					HEADER: 'OUR PARTNERS'
				},

				'contact': {
					HEADER: 'CONTACT US'
				}
				
			})

			.translations('ch',  {
				'navbar': {
					ABOUT: '关于我们',
					PRODUCTS: '产品',
					SERVICES: '服务',
					PARTNERS: '合作伙伴',
					CONTACT: '联絡我們'
				},

				'partners': {
					HEADER: '合作伙伴'
				},

				'contact': {
					HEADER: '联絡我們'
				}
			})

			.preferredLanguage('en');

	}


})();