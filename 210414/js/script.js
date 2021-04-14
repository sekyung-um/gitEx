$(document).ready(function () {
  $("header nav .gnb > li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown();
    },
    function () {
      $(this).find("ul.sub").stop().slideUp();
    }
  );

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
});
