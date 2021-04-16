$(document).ready(function(){

    $("nav ul.gnb > li").hover(
        function () {
          $(this).find("ul.sub").stop().fadeIn();
        },
        function () {
          $(this).find("ul.sub").stop().fadeOut();
        }
      );

      $(".contents ul.slide li").eq(0).siblings().css("top","-350px");
      var I = 0;

      setInterval(function(){
        if ( I < 2 ) {
            I++;
        } else {
            I = 0;
        }

        $(".contents ul.slide li").eq(I).siblings().animate({top:"-350px"});
        $(".contents ul.slide li").eq(I).animate({top:"0px"});
      },3000);
});