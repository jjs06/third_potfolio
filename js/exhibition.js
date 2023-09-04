//화살표 오버 시 이미지 opacity,scale 변경
$(function () {
    $(".go").hover(function () {
        $(this).prev(".exhibition").css({
            opacity: 0.5,
            transform: "scale(1.1)"
        });
    }, function () {
        $(this).prev(".exhibition").css({
            opacity: 1,
            transform: "scale(1)"
        });
    });
});