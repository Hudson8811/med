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
	var productsSlider;
	$('.js-products__slider').each(function(){
		let slider = $(this);
		productsSlider = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			loop: true,
			centeredSlides: false,
			spaceBetween: 25,
			slidesPerView: 1.2,
            autoHeight: false,
            speed: 300,
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
		let slider=$(this)
		partnersSlider = new Swiper(slider[0], {
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
        $('#modal-reg .contacts__form__title').text('Заказать звонок');
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
        $('#modal-reg .contacts__form__title').text('Запросить каталог');
		$.fancybox.open({
			src: "#modal-reg",
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
	    event.preventDefault();
		modalReg();
		bodyNoScroll()
	});
	/*$('.js-btn__detail').on('click', function () {
        let name = $(this).data('name');
        let text = htmlspecialchars_decode($(this).data('text'));
        let img = $(this).data('img');
        $('#modal-detail.modal-detail').css('background-image', 'url('+img+')');
        $('#modal-detail .modal-detail__company__text .text__20').html(text);
        $('#modal-detail .modal-detail__company__title').text(name);
		modalDetail()
		bodyNoScroll()
	});*/
	$('.js-btn__detail').on('click', function () {
        let name = $(this).data('name');
        let text = htmlspecialchars_decode($(this).data('text'));
        let img = $(this).data('img');
        if (img !== ''){
            $('#modal-detail-product .modal-detail-product__img img').attr('src', img).show();
        } else {
            $('#modal-detail-product .modal-detail-product__img img').hide();
        }
        $('#modal-detail-product .modal-detail__company__text .text__20').html(text);
        $('#modal-detail-product .modal-detail__company__title').text(name);
        $('.hint__lists').html('');
        modalDetailProduct()
		bodyNoScroll()
	});
	$('.js-btn__detail-company').on('click', function () {
        let name = $(this).data('name');
        let text = htmlspecialchars_decode($(this).data('text'));
        let img = $(this).data('img');
        $('#modal-detail.modal-detail').css('background-image', 'url('+img+')');
        $('#modal-detail .modal-detail__company__text .text__20').html(text);
        $('#modal-detail .modal-detail__company__title').text(name);
        modalDetail()
        bodyNoScroll()
	});
    $('.js-btn__detail-product').on('click', function () {
        let name = $(this).data('name');
        let text = htmlspecialchars_decode($(this).data('text'));
        let img = $(this).data('img');
        if (img !== ''){
            $('#modal-detail-product .modal-detail-product__img img').attr('src', img).show();
        } else {
            $('#modal-detail-product .modal-detail-product__img img').hide();
        }

        $('#modal-detail-product .modal-detail__company__text .text__20').html(text);
        $('#modal-detail-product .modal-detail__company__title').text(name);

        try {
            let dots = $(this).data('dots');
            let id = $(this).data('id');
            $('.hint__product').remove();
            $('.hint__list').remove();
            let i = 0;
            dots.forEach(function (elem){
                i++;
                let x = elem.x;
                let y = elem.y;
                let text = elem.text;
                let html = '<div class="hint hint__product" data-template="product__'+id+'_'+i+'" style="left:'+x+'; top:'+y+'; ">\n' +
                    '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">\n' +
                    '<circle opacity="0.2" cx="16.9746" cy="17.6502" r="16.9746" fill="#E83B3B"/>\n' +
                    '<circle cx="16.6662" cy="17.5866" r="8.72874" fill="#E83B3B"/>\n' +
                    '</svg>\n' +
                    '</div>';
                $('.hints__product').prepend(html);

                let html2 = '<div class="hint__list" id="product__'+id+'_'+i+'">\n' +
                    text+'\n' +
                    '</div>';
                $('.hint__lists').prepend(html2);
            });
            initHints()
        } catch (error) {
            console.error("Ошибка при декодировании JSON: " + error.message);
        }

        try {
            let files = $(this).data('files');
            let html = '<div class="modal-detail__company__files">';
            let i = 0;
            files.forEach(function (elem){
                i++;
                let link = elem.link;
                let title = elem.title;
                html += '<div class="modal-detail__company__file">\n' +
                    '<a href="'+link+'" download>'+title+'</a>\n' +
                    '</div>\n';
            });
            html += '</div>';

            if (i > 0){
                $('#modal-detail-product .modal-detail__company__text .text__20').append(html);
            }
        } catch (error) {
            console.error("Ошибка при декодировании JSON: " + error.message);
        }


        modalDetailProduct()
        bodyNoScroll()
    });
    function htmlspecialchars_decode(str) {
        var element = document.createElement('textarea');
        element.innerHTML = str;
        return element.value;
    }
	$('.js-btn__order-catalog').on('click', function () {
        event.preventDefault();
		$.fancybox.close();
		setTimeout(() => {
			modalRegCatalog();
			bodyNoScroll()
		}, 500)
	});
    function initHints(){
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
    }
    initHints();

	
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
    let assetsUrl = '';
    if (typeof templateUrl !== 'undefined') {
        assetsUrl = templateUrl;
    }

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
			iconImageHref: assetsUrl +'/img/svg/predstvo_act.svg',
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
				var a = coor;
				var xy = a.split(',');
				var x = parseFloat(xy[0]);
				var y = parseFloat(xy[1]);


				
				myPlacemark2 = new ymaps.Placemark([x, y],{},{
						iconLayout: 'default#image',
						iconImageHref: assetsUrl + '/img/svg/predstvo_act.svg',
						iconImageSize: [26, 26],
						iconImageOffset: [-13, -13]
				});

				map.geoObjects.add(myPlacemark2);
				map.setCenter([x, y]);

		}) 

	}
}

