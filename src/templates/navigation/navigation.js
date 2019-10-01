'use strict';

const navigationLink = $('.js-anchor-link');
navigationLink.on('click', function (e) {
    e.preventDefault();
    hamburger.removeClass('hamburger-active');
    navigation.slideUp();
    let navScroll = $(this).attr('href'),
        navScrollBlock = $(navScroll).offset().top;
    $('html, body').animate({
        scrollTop: navScrollBlock
    }, 2000);
});

const hamburger = $('.hamburger');
const navigation = $('.navigation');
hamburger.on('click', function (e) {
    e.preventDefault();
    hamburger.toggleClass('hamburger-active');
    navigation.slideToggle();
});