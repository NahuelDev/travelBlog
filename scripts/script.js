$(function() {
    $('div.nuevo > img').after('<p class="new">NUEVO</p>');
    size();
});



$(window).on('resize', function() {
    size();
});


function size() {
    if ($(window).width() <= 992) {
        $(".articleNext,.blog .info p, .bitBlogEntries, .header-text p").addClass("d-none d-lg-block");
        $("header > nav.navbar").removeClass("fixed-top");
        $("main").css("margin-top", "0px");
        $("article.blog").removeClass("m-5");
        $("article.blog>h5").addClass("mx-5");
        $(".blog>.row").removeClass("py-5").addClass("py-2");
        $(".tend>.row>.nuevo").removeClass("col-3").addClass("col-12");
    }
    if ($(window).width() > 992) {
        $("header > nav.navbar").addClass("fixed-top");
        $("main").css("margin-top", "56px");
        $("article.blog").addClass("m-5");
        $("article.blog > h5").removeClass("mx-5");
        $(".blog>.row").addClass("py-5").removeClass("py-2");
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

$(document).ready(function() {
    $('.navbar-nav .nav-item').click(function() {
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
    })
});