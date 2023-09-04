$(document).ready(function () {
    $('.home4-artist').hover(function () {
        $(this).stop().animate({ opacity: 1 }, 500);
        $(this).parent().siblings().find('.home4-artist').stop().animate({ opacity: 0.3 }, 500);
    });
});
