$(function () {

    // page index
    let page = $('.s').eq(0).attr('data-value');
    let total = $('.s').length;
    $('.page').html(page + ' / ' + total);

    // click slide

    function up(){
        page = $('.s').eq(-1).attr('data-value');

        if (page < 1) {
            page = total;
        }
        $('.page').html(page + ' / ' + total);

        $('.slide>.s:last').prependTo('.slide');
        $('.slide').css({ marginTop: '-963px' });
        $('.slide').stop().animate({ marginTop: 0 }, 600);
    }

    function down(){
        page = $('.s').eq(1).attr('data-value');

        if (page > total) {
            page = 1;
        }
        $('.page').html(page + ' / ' + total);

        $('.slide').stop().animate({ marginTop: '-963px' }, 600, function () {
            $('.slide>.s:first').appendTo('.slide');
            $('.slide').css({ marginTop: 0 });
        });
    }

    // setInterval(down,3500);

    $('.up').on('click', function () {
        up();
    });

    $('.down').on('click', function () {
        down();
    });

    // submenu

    $('.nt').click(function () {
        $('html, body').animate({ scrollTop: 963 }, 1000);

        return false;
    });
});