$(document).ready(function(){
    $(".gnb > li").mouseover(function(){
        $(".sub").stop().slideDown();
    });
    $(".gnb > li").mouseleave(function(){
        $(".sub").stop().slideUp();
    });

    $(".notice_gal h2").click(function(){
        $(".notice").show();
        $(".gal").hide();
    });
    $(".notice_gal .h100").click(function(){
        $(".gal").show();
        $(".notice").hide();
    });

    $(".notice li").eq(0).click(function(){
        $(".modal").show();
    });
    $("button").click(function(){
        $(".modal").hide();
    });

    var I = 0;

    setInterval(function(){
        if ( I < 2 ) {
            I++;
        } else {
            I = 0;
        }

        // $("ul.slide li").eq(I).siblings().fadeOut();
        // $("ul.slide li").eq(I).fadeIn();

        $("ul.slide li").eq(I).siblings().animate({left:"-1200px"},500);
        $("ul.slide li").eq(I).animate({left:"0"},500);
        console.log(I);
    },3000);
});