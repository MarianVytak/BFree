$(function () {

    "use strict";

    // Hamburger
    var hamburger = $('.hamburger');
    hamburger.on('click', function (e) {
        e.preventDefault();
        hamburger.toggleClass('hamburger-active');
        menu.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });


    // Menu
    var menu = $('.menu');
    var menuLink = $('.menu-link');
    menuLink.on('click', function () {
        menu.removeClass('active');
        hamburger.removeClass('hamburger-active');
        $('body').removeClass('no-scroll');
    });


    // Dropdown
    var dropdownLink = $('.dropdown-link');
    dropdownLink.on('click', function (e) {
        e.preventDefault();
        var thisDropdownMenu = $(this).attr('href');
        $(thisDropdownMenu).slideToggle();
    });


    // Modal
    var modalLink = $('.modal-link');
    var modal = $('.modal');
    var modalClose = $('.modal-close');
    modalLink.on('click', function (e) {
        e.preventDefault();
        var thisModalMenu = $(this).attr('href');
        $(thisModalMenu).addClass('active');
        $('body').addClass('no-scroll');
    });
    modalClose.on('click', function (e) {
        e.preventDefault();
        modal.removeClass('active');
        $('body').removeClass('no-scroll');
    });


    // Theme
    var theme = $('.toggle-theme');
    theme.on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('theme');
    });


    // Checkbox
    var checkbox = $('.checkbox');
    checkbox.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    // Hamburger Side Menu
    var hamburgerSideMenu = $('.side-menu__hamburger');
    var sideMenu = $('.side-menu');
    hamburgerSideMenu.on('click', function (e) {
        e.preventDefault();
        hamburgerSideMenu.toggleClass('hamburger-active');
        sideMenu.toggleClass('active');
    });


});
