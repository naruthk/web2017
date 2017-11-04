"use strict";

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    var selectedClass = "";
    $(".fil-cat").click(function() { 
        selectedClass = $(this).attr("data-rel"); 
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300); 
    });


});