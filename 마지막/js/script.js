$(document).ready(function(){
    $(".gnb").mouseover(function () {
        $(".sub").stop().slideDown();
      });
      $(".gnb").mouseleave(function () {
        $(".sub").stop().slideUp();
      });

    $(".notice > li").eq(0).click(function(){
        $(".modal").show();
    });

    $("button").click(function(){
        $(".modal").hide();
    });



    //슬라이드!!!!!!!!!!!!!!!!!!!!!!!!
    // $(".contents ul.slide li").eq(0).siblings().css("left","-1200px");
    // var I = 0;
    // setInterval(function(){
    //     if ( I < 2) {
    //         I++;
    //     } else {
    //         I = 0;
    //     }
    //     $(".contents ul.slide li").eq(I).siblings().animate({left:"-1200px"});
    //     $(".contents ul.slide li").eq(I).animate({left:"0"});

    // },3000);

    //페이드인 아웃
    $(".contents ul.slide li").eq(0).siblings().hide();
    var I = 0;
    setInterval(function(){
        if ( I < 2 ) {
            I++;
        } else {
            I = 0;
        }

        $(".contents ul.slide li").eq(I).siblings().fadeOut();
        $(".contents ul.slide li").eq(I).fadeIn();
    },3000);
});