
$(document).ready(function(){
    if ($(window).width() < 960) {
        $('.slick-carousel').clone().insertAfter(".welcome-section .container .wrap-content .old-price");
    }
    $('.slick-carousel').slick({

    });
});