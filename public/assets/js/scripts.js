
$(function() {
    $('.user-slide-active').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        navText: ['<img src="/chatbot/assets/media/icons/arrow.svg" alt="">', '<img src="/chatbot/assets/media/icons/arrow.svg" alt="">'],
        nav: true,
        dots: false,
    })

    // game-active owlCarousel
	$('.game-active').owlCarousel({
		loop: true,
		margin: 20,
		items: 1,
		nav: false,
		dots: false,
		autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:450,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 3
			},
			992: {
				items: 4
			},
			1201: {
				items: 5
			},
			1400: {
				items: 6
			}
		}
	})

	// chat-bot-active owlCarousel
	$('.chat-bot-active').owlCarousel({
		loop: true,
		margin: 20,
		items: 1,
		nav: false,
		dots: false,
		autoplay: false,
        autoplayTimeout:4000,
        smartSpeed:450,
		responsive: {
			0: {
				items: 1
			},
			560: {
				items: 1,
				stagePadding: 30
			},
			600: {
				items: 1,
				stagePadding: 70
			},
			767: {
				items: 2,
			},
			992: {
				items: 2,
				stagePadding: 50
			},
			1201: {
				items: 3,
			},
			1600: {
				items: 4,
			}
		}
	})

    // dropdown toogler
	var dropdwonToggler = $('.dropdown_toogler');
	$(dropdwonToggler).on('click', function (e) {
		$(dropdwonToggler).removeClass('active');
		$(dropdwonToggler).next().removeClass('current');
		$(this).toggleClass('active');
		$(this).next().toggleClass('current');
		$('.overly').toggleClass('current');
        e.stopPropagation();
	});

    $(document).on('click', function() {
        $(dropdwonToggler).removeClass('active');
        $(dropdwonToggler).next().removeClass('current');
    });

	$(".click-here-filter").on('click', function() {
		$(".explore-filter-box").toggleClass('model-open');
	}); 

	$(".filter-close-btn").on('click', function(){
		$(".explore-filter-box").removeClass('model-open');
	});
})