/*==========================
||||       Preloader    ||||
==========================*/
$(window).on('load', function () { //makes sure entire          webpage is loaded
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});

/*==========================
||||     Team           ||||
==========================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // Breakpoint from 0 up
            0: {
                items: 1
            },
            // Breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/*==========================
||||    Progress Bars   ||||
==========================*/
$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*==========================
||||   Responsive Tabs  ||||
==========================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*==========================
||||      Work          ||||
==========================*/
$(window).on('load', function () {
    //Initialize Isotope
    $("#isotope-container").isotope({});

    //Filter Buttons on-click
    $("#isotope-filters").on('click', 'button', function () {
        //Get Filter Value
        var filterValue = $(this).attr('data-filter');

        //Filter Work
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //Active Button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*==========================
||||  Magnific Popup    ||||
==========================*/
$(function () {
    $("#work-wrapper").magnificPopup({
        delegate: 'a', //child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*==========================
||||  Testimonials      ||||
==========================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*==========================
||||       Stats        ||||
==========================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 3500,
    });
});

/*==========================
||||       Clients      ||||
==========================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 800,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // Breakpoint from 0 up
            0: {
                items: 3
            },
            // Breakpoint from 480 up
            480: {
                items: 6
            }
        }
    });
});

/*==========================
||||      Google Maps   ||||
==========================*/


/*==========================
||||    Navigation      ||||
==========================*/

// Show & Hide White Navigation 

$(function () {
    // Show/Hide Navigation on Page Load
    showHideNav();

    $(window).scroll(function () {
        // Show/Hide Navigation on Page Load
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 80) {
            // Show White Navigation
            $("nav").addClass("white-nav-top");

            // Show Dark Logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            // Show Back To Top Button
            $("#back-to-top").fadeIn();

        } else {
            // Hide White Navigation
            $("nav").removeClass("white-nav-top");

            // Show White Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            // Hide Back To Top Button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // Get Section ID like #about, #services, #work, #team and etc
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


/*==========================
||||   Mobile Menu      ||||
==========================*/

$(function () {

    // Show Mobile Nav
    $("#mobile-nav-open-btn").click(function () {

        $("#mobile-nav").css("height", "100%");

    });

    // Hide Mobile Nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {

        $("#mobile-nav").css("height", "0%");

    });

});


/*==========================
||||   Animation        ||||
==========================*/
//Animate on Scroll
$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown")
});
