$(function(){
    $("#span_1").on("click", function(){
        $("#c_imgstext1").slideToggle("slow").css("display","flex");
    })
 

    $("#span_2").on("click", function(){
        $("#c_imgstext2").slideToggle("slow").css("display", "flex");
    })


    
    });

    let isAnimating = false; // Variable to track animation state

$(window).scroll(function () {
    let ws = $(this).scrollTop();

    if (!isAnimating) {
        if (ws < 300) {
            //position: relative 의 padding이 absolute에도 적용되서 100%를 주면 pading값과 합쳐지면서 실행됌
            $('.cover').css({ width: '80%' });
            $('.boxline').css({ width: '90%' });
        }

        if (ws > 300 && ws < 1200) {
            isAnimating = true; // Start animation
            $('.cover').clearQueue().animate({ width: 0 }, 1000, function () {
                isAnimating = false; // Animation completed
            });
        }

        if (ws > 1000) {
            $('.cover').css({ width: '80%' });
            $('.boxline').css({ width: '90%' });
        }
    }
});



//header white & black mode

$(window).scroll(function(){ 
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if(height > 1600){ 
        $(".surch").attr("src", "../img/icon_black.png");
        $(".logoimg").attr("src", "../img/logo_black.png");
        $(".login").css("color","#000")
        $(".line").css("backgroundColor","#000")
    }else if(height < 1600){ 
        $(".surch").attr("src", "../img/surch.png");
        $(".logoimg").attr("src", "../img/logo1.png");
        $(".login").css("color","#fff")
        $(".line").css("backgroundColor","#fff")
    } 
  });
