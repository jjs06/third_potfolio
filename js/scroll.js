$(function(){
    $("#first").css("opacity", "1");

    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
    

        var s2 = $('#first').offset().top;
        if(scroll > s2 - 700){
            $('#first').css("opacity", "1");
 
        }

        var s3 = $('#fixed').offset().top;
        if(scroll > s3 - 500){
            $('#first').css("opacity", "0");
            $('#fixed').css("opacity", "1");
        
        }

    });
});

