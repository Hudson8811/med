jQuery(function () { 

	var reviewsAll
	$('.js-detailed-offer__slider').each(function(){
		var slider=$(this)
		var reviewsAll = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			// loop: true,
			slidesPerView: 1,
			navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
			},
			pagination: {
				el: slider.find('.swiper-pagination')[0],
				type: 'bullets',
				clickable: true
			},
		});

	})
	var productsSlider
	$('.js-products__slider').each(function(){
		var slider=$(this)
		var productsSlider = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			loop: true,
			centeredSlides: false,
			spaceBetween: 25,
			slidesPerView: 1.2,
			navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
			},
			pagination: {
				el: slider.find('.swiper-pagination')[0],
				type: 'bullets',
				clickable: true
			},
			breakpoints: {
			    // when window width is >= 480px
			  1250: {
			        slidesPerView: 3,
			        spaceBetween: 25,
							centeredSlides: true,
							loop: true,
			    },
			  992: {
			        slidesPerView: 2,
							centeredSlides: true,
			        spaceBetween: 25
			    },
			  768: {
			        slidesPerView: 1.5,
							centeredSlides: true,
			        spaceBetween: 25
			    },
			}			
		});

	})
	var customerSlider
	$('.js-customer__slider').each(function(){
		var slider=$(this)
		var customerSlider = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			// loop: true,
			// centeredSlides: true,
			spaceBetween: 25,
			slidesPerView: "auto",
			navigation: {
				nextEl: ".customer__swiper-button-next",
				prevEl: ".customer__swiper-button-prev"
			},
			breakpoints: {
				// when window width is >= 480px
			1250: {
						slidesPerView: 4,
				},
		}		
		});

	})
	var partnersSlider
	$('.js-partners__slider').each(function(){
		var slider=$(this)
		var partnersSlider = new Swiper(slider[0], {
			spaceBetween: 30,
			speed: 2000,
			freeMode: true,
			loop: true,
			pagination: false,
			// centeredSlides: true,
			slidesPerView: 'auto',
			// setWrapperSize: true,
			allowTouchMove: false,
			autoplay: {
				delay: 0,
				// reverseDirection: true,
				disableOnInteraction: false,
			},	
		});

	})
	function modalReg() {
		// event.preventDefault();
		$.fancybox.open({
			src: "#modal-reg",
			type: "inline",
			touch: false
		});
	}	
	function modalDetail() {
		// event.preventDefault();
		$.fancybox.open({
			src: "#modal-detail",
			type: "inline",
			display: "flex",
			touch: false
			// defaultDisplay: "flex"
		});
		
	}	
	function modalDetailProduct() {
		// event.preventDefault();
		$.fancybox.open({
			src: "#modal-detail-product",
			type: "inline",
			touch: false
		});
		
	}	
	function modalRegCatalog() {
		// event.preventDefault();
		$.fancybox.open({
			src: "#modal-reg__catalog",
			type: "inline",
			touch: false

		});
		
	}	
	$(document).on('afterClose.fb', function( e, instance, slide ) {
    bodyYesScroll();
	});
	function bodyNoScroll() {
		let bodyBodymotionless = document.querySelector('body')
		bodyBodymotionless.classList.add("Bodymotionless")
	
	}
	function bodyYesScroll() {
		let bodyBodymotionless = document.querySelector('body')
		bodyBodymotionless.classList.remove("Bodymotionless")
	}
	$('.js-btn__order').on('click', function () {
		modalReg();
		bodyNoScroll()
	});
	$('.js-btn__detail').on('click', function () {
		modalDetail()
		bodyNoScroll()
	});
	$('.js-btn__detail-product').on('click', function () {
		modalDetailProduct()
		bodyNoScroll()
	});
	$('.js-btn__order-catalog').on('click', function () {
		$.fancybox.close();
		setTimeout(() => {
			modalRegCatalog();
			bodyNoScroll()
		}, 500) 

	});
	if (document.documentElement.clientWidth < 767) {
		tippy('.hint', {
			content(reference) {
				const id = reference.getAttribute('data-template');
				const template = document.getElementById(id);
				return template.innerHTML;
			},
			theme: 'tomato',
			zIndex:	99993,
			arrow: "none",
			allowHTML: true,
			// placement: 'right',
			inlinePositioning: true,
		
		});
	} else {
		tippy('.hint', {
			content(reference) {
				const id = reference.getAttribute('data-template');
				const template = document.getElementById(id);
				return template.innerHTML;
			},
			theme: 'tomato',
			arrow: "none",
			allowHTML: true,
			zIndex:		99993,
			placement: 'right',
			inlinePositioning: true,
		
		});
	};

	
	let overlayBg = document.querySelector(".mob-menu--overlay");
	let mobMenu = document.querySelector(".mob-menu__section");
	let humb = document.querySelector(".hamburger");
	let mobMenuClose = document.querySelector(".mob-menu--close");
	
	// var hamburger = $(".hamburger");
	// hamburger.on("click", function(e) {
	// 	hamburger.toggleClass("is-active");
	// });


	
	mobMenuClose.addEventListener("click", function () {
		mobMenu.classList.remove("active");
		humb.classList.remove("is-active");
		bodyYesScroll()
	});
	overlayBg.addEventListener("click", function () {
		mobMenu.classList.remove("active");
		humb.classList.remove("is-active");
		bodyYesScroll()
	});
	humb.addEventListener("click", function () {
		let kye = mobMenu.classList.contains("active");
		if (kye == false) {
			mobMenu.classList.add("active");
			bodyNoScroll()
		}else {
			mobMenu.classList.remove("active");
			bodyYesScroll()
		}
	});
	
	$('.js-mask-phone').mask('+7(000)000-00-00');


});


function MapInit() {

	if ($('.js-simple-point-map').length > 0) {
		const map = new ymaps.Map('js-map', {
			center: [59.992339, 30.278166],
			zoom: 10,
			// type: 'yandex#satellite',
			// Карта будет создана без
			// элементов управления.
			controls: []
		});
		myPlacemark2 = new ymaps.Placemark([59.992339, 30.278166],{},{
			iconLayout: 'default#image',
			iconImageHref: '/img/svg/predstvo_act.svg',
			iconImageSize: [26, 26],
			iconImageOffset: [-13, -13]
	});

	// Добавляем метку на карту.
	map.geoObjects.add(myPlacemark2);
		$(".contacts__office").on("click", function () {
				$('.contacts__office').each(function() {
					var office = $(this);
					office.removeClass( "active" )
				});
				$(this).addClass( "active" );
				var coor = $(this).attr('data-coords');
				console.log (coor)
				var a = coor;
				var xy = a.split(',');
				var x = parseFloat(xy[0]);
				var y = parseFloat(xy[1]);


				
				myPlacemark2 = new ymaps.Placemark([x, y],{},{
						iconLayout: 'default#image',
						iconImageHref: '/img/svg/predstvo_act.svg',
						iconImageSize: [26, 26],
						iconImageOffset: [-13, -13]
				});

				// Добавляем метку на карту.
				map.geoObjects.add(myPlacemark2);
				map.setCenter([x, y]);

		}) 

	}
}

