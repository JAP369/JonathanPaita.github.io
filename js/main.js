jQuery(document).ready(function () {

    "use strict"
    $('.slider').ripples({
        dropRadius: 12,
        perturbance: 0.03,

    });

    $(".text").typed({
        strings: ["<e>Welcome to</e><b class='primary'> Jonathan Paita's Personal Website.</b>", "<e>Feel free</e><b class='primary'> to explore!</b>"],
        typespeed: 0,
        loop: true

    });

    $(window).scroll(function () {

        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass('secondary');
        }

        else
            if ($("nav").hasClass('secondary')) {
                $("nav").removeClass('secondary');
            }
    });

    $('.gal').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });

    $("#pet-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {

                items: 1
            },
            480: {

                items: 2
            },

            768: {

                items: 3
            }
        }



    });
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
    new WOW().init();

});