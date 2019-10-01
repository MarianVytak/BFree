'use strict';

$('.home-11__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                adaptiveHeight: true
            }
        },
    ]
});