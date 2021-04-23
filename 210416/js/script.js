$(document).ready(function(){

    $("nav ul.gnb > li").hover(
        function () {
          $(this).find("ul.sub").stop().slideDown();
        },
        function () {
          $(this).find("ul.sub").stop().slideUp();
        }
      );

      $(".contents ul.slide li").eq(0).siblings().css("left","-800px");
      var I = 0;

      setInterval(function(){
        if ( I < 2 ) {
            I++;
        } else {
            I = 0;
        }

        $(".contents ul.slide li").eq(I).siblings().animate({left:"-800px"});
        $(".contents ul.slide li").eq(I).animate({left:"0px"});
      },3000);
});