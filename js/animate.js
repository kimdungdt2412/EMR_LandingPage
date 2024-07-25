$(function() {
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
                if ($element.attr('id') === 'year-counter' && !$element.attr('class').includes('animated')) animateValue($element[0], 0, 20, 1000, true)
                if ($element.attr('id') === 'customer-counter' && !$element.attr('class').includes('animated')) animateValue($element[0], 0, 5000, 1000)
                if ($element.attr('id') === 'office-counter' && !$element.attr('class').includes('animated')) animateValue($element[0], 0, 4, 1000)
                if ($element.attr('id') === 'employee-counter' && !$element.attr('class').includes('animated')) animateValue($element[0], 0, 200, 1000, true)

                $element.addClass('animated');

            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');

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
        scale: 1.5,
        delay: 1,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    var parallaxDelayItems = document.querySelectorAll('.simple-parallax-delay-item');
    new simpleParallax(parallaxDelayItems, {
        overflow: true,
        scale: 2,
        delay: 1.5,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    var parallaxUpLargeItems = document.querySelectorAll('.parallax-large-item');
    new simpleParallax(parallaxUpLargeItems, {
        overflow: true,
        scale: 2,
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    var parallaxRightLargeItems = document.querySelectorAll('.parallax-right-large-item');
    new simpleParallax(parallaxRightLargeItems, {
        overflow: true,
        orientation: 'right',
        scale: 2,
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });



    //Navbar collapse
    var b = $("#nav-button");
    var w = $("#mobile-menu");
    var l = $("#mobile-menu-list");

    w.css({ "maxHeight": 0 })

    b.on("click", function() {
        if (w.hasClass('open')) {
            w.removeClass('open');
            w.css({ "maxHeight": 0 })
        } else {
            w.addClass('open');
            w.css({ "maxHeight": l.outerHeight(true) })
        }

    });



    //Swiper
    var swiper = new Swiper(".multiple-slide-carousel", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 4000
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });


    var blogSwiper = new Swiper(".blog-content", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".blog .swiper-button-next",
            prevEl: ".blog .swiper-button-prev",
        },
        breakpoints: {
            1920: {
                slidesPerView: 4,
                spaceBetween: 50
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

    //counter
    function animateValue(obj, start, end, duration, plus = false) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = plus ? `${Math.floor(progress * (end - start) + start)}+` : Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function confetti() {
        $.each($(".particletext.confetti"), function() {
            var confetticount = ($(this).width() / 50) * 10;
            console.log(confetticount)
            for (var i = 0; i <= confetticount; i++) {
                console.log(this, 'i')
                $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(10, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
            }
        });
    }

    jQuery.rnd = function(m, n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    confetti()


});