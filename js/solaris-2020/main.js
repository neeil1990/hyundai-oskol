/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/cars/solaris-2020/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_store_service_s_state__ = __webpack_require__("./resources/js/vue/store-service/s-state.js");


$(function () {
	//Обновить цены в баннере

	//!!!Установи правильный id тачки для загрузки цены
	var priceCarId = 30;

	$.ajax({
		url: __WEBPACK_IMPORTED_MODULE_0__vue_store_service_s_state__["a" /* default */].API.CAR_LIST,
		success: function success(resp) {
			if (resp) {
				if (resp.cars) {
					if (resp.cars[priceCarId]) {
						if (resp.cars[priceCarId].minPrice && resp.cars[priceCarId].payment) {
							$('#price-from').text(resp.cars[priceCarId].minPrice.toString().replace(/\D/g, '').replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g, ' '));
							$('#credit-from').text(resp.cars[priceCarId].payment.toString().replace(/\D/g, '').replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g, ' '));
						}
					} else {
						console.error('wrong car id ' + priceCarId);
					}
				}
			}

			$('.banner').addClass('isEntered');
		}
	});

	var controller = new ScrollMagic.Controller();

	if ($(window).outerWidth() > 1262) {
		var controller2 = new ScrollMagic.Controller({ globalSceneOptions: { offset: -48, triggerHook: '0' } });
	} else {
		var controller2 = new ScrollMagic.Controller({ globalSceneOptions: { offset: -104, triggerHook: '0' } });
	}

	controller.scrollTo(function (newScrollPos) {
		$("html, body").animate({ scrollTop: newScrollPos });
	});

	$('a.scroll').on('click', function (e) {
		e.preventDefault();
		var obj = $(this).attr('href');

		if ($(window).outerWidth() > 1262) {
			controller.scrollTo($(obj).offset().top - 47);
		} else {
			controller.scrollTo($(obj).offset().top - 103);
		}
	});

	//Подсветка активного пункта меню
	var scene1 = new ScrollMagic.Scene({ triggerElement: '#design' })
	//.addIndicators()
	.addTo(controller2);

	scene1.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#design"]').addClass('active');
		checkNavPos();
	});
	scene1.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		checkNavPos();
	});

	var scene2 = new ScrollMagic.Scene({ triggerElement: '#dynamics' }).addTo(controller2);

	scene2.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#dynamics"]').addClass('active');
		checkNavPos();
	});
	scene2.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#design"]').addClass('active');
		checkNavPos();
	});

	var scene3 = new ScrollMagic.Scene({ triggerElement: '#comfort' }).addTo(controller2);

	scene3.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#comfort"]').addClass('active');
		checkNavPos();
	});
	scene3.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#dynamics"]').addClass('active');
		checkNavPos();
	});

	var scene4 = new ScrollMagic.Scene({ triggerElement: '#safety' }).addTo(controller2);

	scene4.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#safety"]').addClass('active');
		checkNavPos();
	});
	scene4.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#comfort"]').addClass('active');
		checkNavPos();
	});

	var scene5 = new ScrollMagic.Scene({ triggerElement: '#specs' }).addTo(controller2);

	scene5.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#specs"]').addClass('active');
		checkNavPos();
	});
	scene5.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#safety"]').addClass('active');
		checkNavPos();
	});

	function checkNavPos() {
		var obj = $('a.scroll.active'),
		    windowWidth = $(window).width(),
		    scrollLeft = $('.nav').scrollLeft();

		if (obj.length > 0) {
			//console.log(obj.offset().left, scrollLeft)
			if (obj.offset().left < scrollLeft || obj.offset().left + obj.width() >= windowWidth) {
				$('.nav').animate({ scrollLeft: obj.position().left });
				console.log(obj.position().left);
			}
		}
	}

	$.extend($.lazyLoadXT, {
		edgeY: 500
	});

	//Фиксирование меню
	var fixMenu = new ScrollMagic.Scene({ triggerElement: ".nav", duration: '0', triggerHook: '0' })
	//.addIndicators({ name: "nav" })
	.setPin('.nav').addTo(controller);

	$(window).on('resize', function () {
		checkMenuOffset();
	});

	checkMenuOffset();

	function checkMenuOffset() {
		if ($(window).outerWidth() < 1263) {
			fixMenu.offset(-56);
		} else {
			fixMenu.offset(0);
		}
	}

	//Parallax
	var rellax;

	$(window).on('resize', function () {
		parallax();
	});

	parallax();

	function parallax() {
		if ($(window).outerWidth() > 1262) {
			if (rellax) {
				rellax.destroy();
			}
			rellax = new Rellax('.s-parallax__list--right', {
				center: true,
				speed: 5
			});

			var obj = $('.s-parallax');

			obj.each(function () {
				$(this).find('.s-parallax__list--right').append($(this).find('.s-parallax__list--right').prev('.s-parallax__list--left').find('.s-parallax__item--right'));
			});
		} else {
			if (rellax) {
				rellax.destroy();
			}

			var obj = $('.s-parallax');

			obj.each(function () {
				$(this).find('.s-parallax__list--left').append($(this).find('.s-parallax__list--left').next('.s-parallax__list--right').find('.s-parallax__item'));
			});
		}

		$('.s-parallax__item').each(function () {
			if ($(this).data('order')) {
				$(this).css('order', $(this).data('order'));
			}
		});
	}

	//Анимация смены изображения дисков
	// var animP = new TimelineMax({repeat:-1, yoyo:true, repeatDelay: 1})

	// animP
	// 	.staggerFrom('.design .s-parallax__bg', 0.3, {
	// 		opacity: 0
	// 	}, 3)

	//Анимация смены изображения салона
	var animC = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 2 });

	animC.staggerFrom('.dynamics--2 .dynamics__back--view1', 0.5, {
		opacity: 0
	}, 4);

	//Раздел динамика
	//Счётчики
	var count1 = {
		score: 0,
		update: function update() {
			$('#count1').text(this.score);
		}
	};
	var count2 = {
		score: 0,
		update: function update() {
			$('#count2').text(this.score);
		}
	};

	var count3 = {
		score: 0,
		update: function update() {
			$('#count3').text(this.score);
		}
	};

	var count4 = {
		score: 0,
		update: function update() {
			$('#count4').text(this.score);
		}
	};

	var counterAnim = new TimelineMax({
		paused: true
	});

	var counterAnim2 = new TimelineMax({
		paused: true
	});

	counterAnim.add('start').to(count1, 2, { score: "+=100", roundProps: "score", onUpdate: count1.update.bind(count1), ease: Linear.easeNone }, 'start').to(count2, 2, { score: "+=12", roundProps: "score", onUpdate: count2.update.bind(count2), ease: Linear.easeNone }, 'start');

	counterAnim2.add('start').to(count3, 2, { score: "+=123", roundProps: "score", onUpdate: count3.update.bind(count3), ease: Linear.easeNone }, 'start').to(count4, 2, { score: "+=10", roundProps: "score", onUpdate: count4.update.bind(count4), ease: Linear.easeNone }, 'start');

	$('.js-change-view').on('click', function (e) {
		e.preventDefault();
		var view = $(this).data('view');

		$('.js-change-view').each(function () {
			$(this).parents('.dynamics').removeClass($(this).data('view'));
		}).removeClass('active');

		$(this).addClass('active');
		$(this).parents('.dynamics').addClass(view);

		if (view === 'view1') {
			counterAnim2.play();
		}
	});

	var dynamics1 = new ScrollMagic.Scene({ triggerElement: ".dynamics--1", duration: '0', triggerHook: '0.45' })
	//.addIndicators({ name: "design" })
	.addTo(controller);

	dynamics1.on("enter", function (event) {
		$('.dynamics--1').addClass('isEntered');
		dynamics1.destroy();
	});

	var dynamics11 = new ScrollMagic.Scene({ triggerElement: ".dynamics--1", duration: $('.dynamics--1').height(), triggerHook: '0.5' })
	//.addIndicators({ name: "v1" })
	.addTo(controller);

	dynamics11.on("enter", function (event) {
		//		$('#d-video1').get(0).play();
		counterAnim.play();
	});
	dynamics11.on("leave", function (event) {
		//		$('#d-video1').get(0).pause();
		counterAnim.kill();
	});

	var dynamics2 = new ScrollMagic.Scene({ triggerElement: ".dynamics--2", duration: $('.dynamics--2').height(), triggerHook: '0.5' })
	//.addIndicators({ name: "v2" })
	.addTo(controller);

	dynamics2.on("enter", function (event) {
		//		$('#d-video1').get(0).pause();
		//		$('#d-video2').get(0).play();
	});
	dynamics2.on("leave", function (event) {
		//		$('#d-video1').get(0).play();
		//		$('#d-video2').get(0).pause();
	});

	//Safety
	var safety1 = new ScrollMagic.Scene({ triggerElement: ".safety--1", duration: '0', triggerHook: '0.45' })
	//.addIndicators({ name: "design" })
	.addTo(controller);

	safety1.on("enter", function (event) {
		$('.safety--1').addClass('isEntered');
		safety1.destroy();
	});

	var safety2 = new ScrollMagic.Scene({ triggerElement: ".safety--2", duration: '0', triggerHook: '0.45' })
	//.addIndicators({ name: "design" })
	.addTo(controller);

	safety2.on("enter", function (event) {
		$('.safety--2').addClass('isEntered');
		safety1.destroy();
	});

	var safety3 = new ScrollMagic.Scene({ triggerElement: ".safety--3", duration: '0', triggerHook: '0.45' })
	//.addIndicators({ name: "design" })
	.addTo(controller);

	safety3.on("enter", function (event) {
		$('.safety--3').addClass('isEntered');
		safety1.destroy();
	});

	var safety4 = new ScrollMagic.Scene({ triggerElement: ".safety--4", duration: '0', triggerHook: '0.45' })
	//.addIndicators({ name: "design" })
	.addTo(controller);

	safety4.on("enter", function (event) {
		$('.safety--4').addClass('isEntered');
		safety1.destroy();
	});

	//Hint Popup Start
	$('.js-show-df-hint-popup').on('click', function (e) {
		e.preventDefault();
		var popup = $(this).parent('.df-help').find('.df-hint-popup');

		if (popup.hasClass('df-hint-popup--left') || popup.hasClass('df-hint-popup--right')) {
			return null;
		}

		popup.addClass('df-hint-popup--right');
	});

	$('.js-close-df-hint-popup').on('click', function (e) {
		e.preventDefault();
		var popup = $(this).parent('.df-hint-popup');

		popup.removeClass('df-hint-popup--right');
	});

	$(window).on('click', function (e) {
		if ($(e.target).closest('.df-hint-popup').length === 0 && $(e.target).closest('.js-show-df-hint-popup').length === 0) {
			$('.df-hint-popup').removeClass('df-hint-popup--right');
		}
	});
	//Hint Popup End

	// TEMP! HIDE OR DELETE WHEN USE {VUE.COMPONENT #SPECS}
	// $('.specs-dd__head').on('click', function(e) {
	// 	e.preventDefault();
	// 	$(this).parent().find('.specs-dd__dropdown').slideToggle();
	// 	$(this).find('svg').toggleClass('rotate');
	// });
});

/***/ }),

/***/ "./resources/js/vue/store-service/s-state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var domian = 'https://api.cofigurator.hyundai.ru/';
var domian1 = 'https://www.hyundai.ru/';

/* harmony default export */ __webpack_exports__["a"] = ({
	openFindDealerPopup: false,
	openSendDealerPopup: false,
	openOfferCreditPopup: false,
	openBackCallPopup: false,
	openEventPopup: false,
	openCheckoutEventPopup: false,
	openTestDrivePopup: false,
	openSendEmailPopup: false,
	openSendApprovalPopup: false,
	openRules: false,
	openSuccess: false,
	API: {
		CAR: domian + 'car/',
		CAR_LIST: domian + 'carList',
		CAR_LIST2: '/api/carList', //Для дропдаунов со списком авто
		CAR_LIST3: '/ajax/new/getServiceJSON', //Для дропдаунов со списком авто в Калькуляторе ТО
		CAR_MODIFICATIONS: domian + 'car/modifications/',
		CAR_COMPLECTATIONS: domian + 'car/complectations/',
		DEALERS_LIST: '/requestapi/getDealers?notest=1',
		GET_DEALERS_CREDIT: domian + 'dealersCredit', //Также это св-во есть в state конфигуратора
		ENGINES_LIST: '/ajax/new/getServiceJSON',
		TO_CALC_COST: '/ajax/new/calculator', //Расчёт стоимости в калькуляторе ТО
		START_CALC_COST: domian + 'credit/startNew/', //Расчёт стоимости в калькуляторе Start
		CHECK_VIN: '/api/service/checkVin', //Проверка VIN на странице гарантии

		//Формы
		CONTACT_FORM: '/api/send/servicerequest', //Отправка формы на странице калькулятора ТО
		OFFER_CREDIT_FORM: '/api/send/offercreditrequest', //Отправка формы на странице спецпредложений
		START_CONTACT_FORM: '/api/send/start', //Отправка на почту формы на странице Старт
		SERVICE_FORM: '/api/send/servicerequest', //Записть на сервис
		TD_FORM: '/api/send/testdrive', //Записть на ТД
		CONTACT_US_FORM: '/api/send/contactus', //Форма на странице Обратная связь
		MOTORSTUDIO_CHECKOUT_FORM: '/api/send/motorstudio_request', //Форма записи на мероприятие Моторстудия
		VACANCY_FORM: '/api/send/jobseeker', //Форма на странице вакансии
		VACANCY_XMMP_FORM: '/api/send/jobseeker_xmmp', //Форма на странице вакансии
		NEW_EVENT_MOTORSTUDION_FORM: '/api/send/eventRequest', //Форма на странице вакансии
		CHECK_CREDIT: '/api/checkEcredit/' //Показывать ли кнопку Предодобрение кредита на дилерской сборке
	},
	car: { //Данные используются везде
		code: "",
		id: 0,
		image: "",
		link: "",
		name: ""
	},
	savedModel: "", //Устанавливается на странице подели при открытии попапа записи на ТД, т.к. данные с тачкоми подгружаются после открытия попапа
	year: '',
	engine: '',
	vEngine: '',
	mileage: 15,
	user: {
		phone: ''
	},
	years: {},
	engines: {},
	vEngines: [],
	city: '',
	dealer: '',
	cost: {
		works: 0,
		parts: 0,
		partsPl2: 0,
		total: 0
	},
	serviceParts: 'parts',
	data: [],
	dataEngines: [],
	dealersData: [],
	dealers: [],
	dealersCities: [],
	selectedEvents: [],
	selectedEvent: 0,
	carsIdLinks: [{
		id: 22,
		link: 'Creta'
	}, {
		id: 26,
		link: 'NewTucson'
	}, {
		id: 25,
		link: 'NewSantaFe'
	}, {
		id: 23,
		link: 'Solaris'
	}, {
		id: 27,
		link: 'NewElantra'
	}, {
		id: 24,
		link: 'Sonata'
	}, {
		id: 16,
		link: 'H-1'
	}, {
		id: 29,
		link: 'NewSonata'
	}, {
		id: 28,
		link: 'i30N'
	}],
	//Start
	start: {
		carcaseList: [],
		modelsList: [],
		currentCar: {
			name: '',
			id: 0
		},
		currentCarSpec: {
			name: ''
		},
		modificationList: {},
		modification: {
			name: ''
		},
		dataModifications: {},
		complectationList: {},
		complectation: {
			name: '',
			price: 0
		},
		dataComplectations: {},
		packets: {},
		selectedPackets: [],
		activeColorObj: {
			nameRus: '',
			cost: '',
			carImage: ''
		},
		activeColor: 0,
		colorsAPI: {},
		prevColor: 0,
		spritespin: {},
		selectedPrograms: [],
		currentTerm: 36,
		includeKASKO: false,
		compareSelected: '',
		creditPack: {
			pay: 0,
			prepay: 0,
			prepayRub: 0,
			sum: 0,
			addCost: 0,
			lastPay: 0
		},
		openMobileLine: false
	},
	//DealerCars
	dealerCars: {
		carId: 0
	},
	//Trade In
	tradein: {
		currentCar: null,
		sendUrl: '',
		state: {
			step1: false,
			step2: false,
			step3: false
		},
		step2: {
			brand: '',
			model: '',
			age: '',
			year: '',
			complectation: '',
			body: '',
			condition: '',
			milleage: undefined,
			vin: ''
		},
		step3: {
			name: '',
			surname: '',
			patronymic: '',
			tel: '',
			email: '',
			city: ''
		}
	}
});

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/js/pages/cars/solaris-2020/main.js");


/***/ })

/******/ });