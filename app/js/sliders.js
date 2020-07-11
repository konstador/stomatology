$('.caries_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".caries_btn-prev"),
    nextArrow: $(".caries_btn-next"),
});

$('.testimonials_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $(".testimonials_btn-prev"),
    nextArrow: $(".testimonials_btn-next"),
    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]

});

$('.doctors_slider').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $(".doctors_slider-prev"),
		nextArrow: $(".doctors_slider-next"),
		responsive: [
		{
			breakpoint: 1470,
			settings: {
			slidesToScroll: 1,
			slidesToShow: 1,
			}
		}
		]
	});

    $('.diff_slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable:false,
		prevArrow: $(".diff_slider-prev"),
		nextArrow: $(".diff_slider-next"),
		dots:true,
		appendDots:$(".diff_dots"),
	});
