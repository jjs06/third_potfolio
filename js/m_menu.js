$(function () {
    $('.ic').click(function () {

        $(this).toggleClass('is-active')

        if ($('nav').hasClass('full_n')) {
            $('nav>ul').hide();
        } else {
            $('nav>ul').fadeIn(2000);
        }

        $('nav').toggleClass('full_n');

    });
});