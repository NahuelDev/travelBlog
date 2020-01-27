$(function() {
    $('div.nuevo > img').after('<p class="new">NUEVO</p>');
    size();
});

$(window).on('resize', function() {
    size();
});

/*add and remove class for responsive design depending the width*/
function size() {
    if ($(window).width() <= 992) {
        $(".articleNext,.blog .info p, .bitBlogEntries, .header-text p").addClass("d-none d-lg-block");
        $("header > nav.navbar").removeClass("fixed-top");
        $("main").css("margin-top", "0px");
        $("article.tend").addClass("my-5");
        $(".tend>.row>.nuevo").removeClass("col-3").addClass("col-12");
    }
    if ($(window).width() > 992) {
        $("header > nav.navbar").addClass("fixed-top");
        $("main").css("margin-top", "56px");
        $(".tend>.row>.nuevo").addClass("col-3").removeClass("col-12");
    }
    if ($(window).width() <= 752) {
        $(".tendThumbnails:not(.nuevo)").addClass("d-none d-lg-block");
        $(".tend>.row>.nuevo").removeClass("col-3").addClass("col-12");
    }
    if ($(window).width() > 752) {
        $(".tendThumbnails:not(.nuevo)").removeClass("d-none d-lg-block");
        $(".tend>.row>.nuevo").addClass("col-3").removeClass("col-12");
    }
}

/*change the active in the navbar depending the click*/

$(document).ready(function() {
    $('.navbar-nav .nav-item').click(function() {
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
    })
});