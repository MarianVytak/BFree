'use strict';

const accordionLink = $('.home-14__accordion_link');

accordionLink.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    let accordionContentThis = $(this).attr('href');
    $(accordionContentThis).slideToggle();
});