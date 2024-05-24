$(document).ready(function() {

    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */

    var $animationElements = $('.animation-element');
    var $headerElements = $('.header')
    var $window = $(window);

    var isLg = window.matchMedia("only screen and (min-width: 1024px)");


    function checkIfInView() {

        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();

        if (isLg.matches) {
            if (windowTopPosition > 200) {
                $headerElements.removeClass('lg:drop-shadow-none')
                $headerElements.addClass('lg:drop-shadow-md lg:bg-white')
            } else {
                $headerElements.removeClass('lg:drop-shadow-md lg:bg-white')
                $headerElements.addClass('lg:drop-shadow-none')
            }
        }

        var windowBottomPosition = (windowTopPosition + windowHeight);
        $.each($animationElements, function() {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('animated');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

$(function() {
    var parallaxLeftItems = document.querySelectorAll('.parallax-left');
    new simpleParallax(parallaxLeftItems, {
        overflow: true,
        orientation: 'left',
        scale: 5,
        delay: 1,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    var parallaxRightItems = document.querySelectorAll('.parallax-right');
    new simpleParallax(parallaxRightItems, {
        overflow: true,
        orientation: 'right',
        scale: 5,
        delay: 1,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    //up
    var parallaxUpItems = document.querySelectorAll('.parallax-item');
    new simpleParallax(parallaxUpItems, {
        overflow: true,
        scale: 5,
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    var parallaxDownItems = document.querySelectorAll('.parallax-down');
    new simpleParallax(parallaxDownItems, {
        overflow: true,
        orientation: 'down',
        scale: 5,
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    var parallaxItems = document.querySelectorAll('.simple-parallax-item');
    new simpleParallax(parallaxItems, {
        overflow: true,
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });


    //Navbar collapse
    var b = $("#nav-button");
    var w = $("#mobile-menu");
    var l = $("#mobile-menu-list");

    w.height(0);

    b.on("click", function() {
        if (w.hasClass('open')) {
            w.removeClass('open');
            w.height(0);
        } else {
            w.addClass('open');
            w.height(l.outerHeight(true));
        }

    });
});