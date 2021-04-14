$(document).ready(function () {
  $("nav ul.gnb > li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown();
    },
    function () {
      $(this).find("ul.sub").stop().slideUp();
    }
  );
  //슬라이드 이미지 첫번째 보이게 하기
  $(".contents ul.slide li").eq(0).siblings().hide();

  var i = 0;
  setInterval(function () {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }
    $(".contents ul.slide li").eq(i).siblings().fadeOut();
    $(".contents ul.slide li").eq(i).fadeIn();
    console.log(i);
  }, 3000);

  $(".con .con1 h2").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    $(this).next("ul").addClass("on");
  });
}); //ready end
