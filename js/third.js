$(document).ready(function () {
  console.log("a");
  $(".shocktt .cover").animate({ width: 0 }, 1000);

  if (window.matchMedia("(min-width:577px) and (max-width: 768px)").matches) { 
      $('iframe').height('400px');
  } else if(window.matchMedia("(max-width: 576px)").matches) { 
    $('iframe').height('300px');
  }
});

$(function () {
  // $('.xbox').css("transform","translateX(0px)").css("opacity","1");

  $(window).scroll(function () {
    var ws = $(this).scrollTop();
    console.log(ws);

    var bb = $(".betweenbigbox").offset().top;
 
    if(ws > bb - 800){
      $(".betweenbigbox .cover").animate({ width: 0 }, 1000);
    }

    var xb = $(".xbox").offset().top;

    if (ws > xb - 700) {
      console.log(xb);
      $(".xbox").css("transform", "translateX(0px)").css("opacity", "1");
    }

    var yb = $(".ybox").offset().top;

    if (ws > yb - 700) {
      console.log(yb);
      $(".ybox").css("transform", "translateY(0px)").css("opacity", "1");
    }

    var zb = $(".zbox").offset().top;

    if (ws > zb - 700) {
      $(".zbox").css("transform", "translateY(0px)").css("opacity", "1");
    }

    var s5 = $(".tubesize").offset().top;

    if (ws > s5 - 700) {
      $(".tubesize").css("transform", "translate(0px,0px)").css("opacity", "1");
    }

    var s6 = $(".textsize").offset().top;

    if (ws > s6 - 700) {
      $(".textsize").css("transform", "translate(0px,0px)").css("opacity", "1");
    }

    var s7 = $(".textsize2").offset().top;

    if (ws > s7 - 700) {
      $(".textsize2")
        .css("transform", "translate(0px,0px)")
        .css("opacity", "1");
    }
  });
});
