'use strict';

const navigationLink = $('.navigation__list_item_link');
navigationLink.on('click', function (e) {
    e.preventDefault();
    let navScroll = $(this).attr('href'),
        navScrollBlock = $(navScroll).offset().top;
    $('html, body').animate({
        scrollTop: navScrollBlock
    }, 2000);
});