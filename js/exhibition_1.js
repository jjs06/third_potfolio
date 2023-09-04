// 더보기 button

$(function () {
    $(".ed_list").slice(0, 3).show(); // 초기갯수
    $("#load").click(function (e) { // 클릭시 more
        e.preventDefault();
        $(".ed_list:hidden").slice(0, 1).show(); // 클릭시 more 갯수 지저정
        if ($(".ed_list:hidden").length == 0) { // 컨텐츠 남아있는지 확인
        }
    });
});

//headline text bar

let isAnimating = false; // Variable to track animation state

$(window).scroll(function () {
    let ws = $(this).scrollTop();

    if (!isAnimating) {
        if (ws < 300) {
            $('.cover').css({ width: '70%' });
            $('.boxline').css({ width: '80%' });
        }

        if (ws > 300 && ws < 1000) {
            isAnimating = true; // Start animation
            $('.cover').clearQueue().animate({ width: 0 }, 1000, function () {
                isAnimating = false; // Animation completed
            });
        }

        if (ws > 1000) {
            $('.cover').css({ width: '70%' });
            $('.boxline').css({ width: '80%' });
        }
    }
});



//header white & black mode

$(window).scroll(function(){ 
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if(height > 850){ 
        $(".surch").attr("src", "./img/icon_black.png");
        $(".logoimg").attr("src", "./img/logo_black.png");
        $(".login").css("color","#000")
        $(".line").css("backgroundColor","#000")
    }else if(height < 850){ 
        $(".surch").attr("src", "./img/surch.png");
        $(".logoimg").attr("src", "./img/logo1.png");
        $(".login").css("color","#fff")
        $(".line").css("backgroundColor","#fff")
    } 
  });