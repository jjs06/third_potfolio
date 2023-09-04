$(function () {
    let bg = ['img/건물_4.jpg','img/Edward_Hopper_4.jpg','img/Alphonse_Mucha_4.jpg','img/밀리야_밀스타인1.jpg','img/박보마1.jpg'];

    let h = $('.s').innerHeight();
    // page index
    let page = $('.s').eq(0).attr('data-value');
    let total = $('.s').length;
    $('.page').html(page + ' / ' + total);

    for(let i= 0; i < bg.length; i++){
        $('.s').eq(i).css('background-image', `url(${bg[i]})`);         
    }
    // click slide

    function up(){
        page = $('.s').eq(-1).attr('data-value');

        if (page < 1) {
            page = total;
        }
        $('.page').html(page + ' / ' + total);

        $('.slide>.s:last').prependTo('.slide');
        $('.slide').css({ marginTop: -h });
        $('.slide').stop().animate({ marginTop: 0 }, 500);
    }

    function down(){
        page = $('.s').eq(1).attr('data-value');

        if (page > total) {
            page = 1;
        }
        $('.page').html(page + ' / ' + total);

        $('.slide').stop().animate({ marginTop: -h }, 500, function () {
            $('.slide>.s:first').appendTo('.slide');
            $('.slide').css({ marginTop: 0 });
        });
    }

    setInterval(down,3500);

    $('.up').on('click', function () {
        up();
    });

    $('.down').on('click', function () {
        down();
    });

    // submenu

    $('.nt').click(function () {
        $('html, body').animate({ scrollTop: 1143 }, 1000);

        return false;
    });
});