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
			centeredSlides: true,
			spaceBetween: 25,
			slidesPerView: 3,
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

});