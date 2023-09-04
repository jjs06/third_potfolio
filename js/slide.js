
$(function () {
    function slide() {
        let h = $('.all').outerWidth(true);
        
        $('.slide_2').stop().animate({ marginLeft: -h }, 800, function () {
            $('.all:first').appendTo('.slide_2');
            $('.slide_2').css({marginLeft: 0});
        });
    }
    setInterval(slide, 3000);

    $('.prev').click(function () {
        $('.all:last').prependTo('.slide_2');
        $('.slide_2').css('margin-left', '-420px');
        $('.slide_2').stop().animate({ marginLeft: 0 }, 800);
    });



    $(".p").mouseover(function () {
        $(this).siblings('.color').stop().animate({ width: "180px" }).css("opacity", "1");
    });

    $(".p").mouseout(function () {
        $(this).siblings('.color').stop().animate({ width: "80px" }).css("opacity", "0.5");
    });
    

    $(".prev").mouseover(function () {
        $(".prev > img:last").css("display", "block");
        $(".prev > img:first").css("display", "none");

    })

    $(".prev").mouseout(function () {
        $(".prev > img:first").css("display", "block");
        $(".prev > img:last").css("display", "none");
    })



    // scroll #title

    $("#section").css("transform", "translateY(0px)").css("opacity", "0");

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();

        var s1 = $("body").offset().top;
        if (scroll > s1 - 500) {
            $("body").css("opacity", "1");
            $("#section").css("transform", "translateY(0px)").css("opacity", "0");
        }

        var s2 = $("#section").offset().top;
        if (scroll > s2 - 500) {
            $("#section").css("transform", "translateY(50px)").css("opacity", "1");
            $('.ricout').css("transform", "translateY(-50px)").css("opacity", "0");
        }


        var s3 = $(".ricout").offset().top;
        if (scroll > s3 - 600) {
            $("#section").css("transform", "translateY(-50px)").css("opacity", "1");
            $('.ricout').css("transform", "translateY(50px)").css("opacity", "1");
            $('#section1').css("transform", "translateY(0px)").css("opacity", "0");
        }

        var s4 = $("#section1").offset().top;

        if (scroll > s4 - 500) {
            $(".ricout").css("transform", "translateY(-50px)").css("opacity", "0");
            $('#section1').css("transform", "translateY(50px)").css("opacity", "1");
            $('#section2').css("transform", "translateY(-50px)").css("opacity", "0");
        }

        var s5 = $("#section2").offset().top;

        if (scroll > s5 - 600) {
            $("#section1").css("transform", "translateY(-50px)").css("opacity", "0");
            $('#section2').css("transform", "translateY(0px)").css("opacity", "1");
        }
    });

});



