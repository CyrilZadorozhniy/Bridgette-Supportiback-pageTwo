
$(document).ready(function(){
    if ($(window).width() < 960) {
        $('.slick-carousel').clone().insertAfter(".welcome-section .container .wrap-content .old-price");
    }
    $('.slick-carousel').slick({

    });
    $('.button-discont').click(function () {
       $('.action-1').fadeOut(100);
       $('.action-2').fadeIn();
    });
    $('.site-form').submit(function (ev) {
        $('.action-2').fadeOut(100);
        $('.action-3').fadeIn();
        ev.preventDefault();
    });
});