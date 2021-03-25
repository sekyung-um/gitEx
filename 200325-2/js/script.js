$(document).ready(function () {
  //네비게이션
  $(".gnb").mouseover(function () {
    $(".sub").stop().slideDown();
  });
  $(".gnb").mouseleave(function () {
    $(".sub").stop().slideUp();
  });

  //슬라이드

  //모달창
  $(".notice li")
    .eq(0)
    .click(function () {
      $(".modal").show();
    });
  $(".modal h4").click(function () {
    $(".modal").hide();
  });
}); //ready end
