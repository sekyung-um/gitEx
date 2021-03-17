$(document).ready(function () {
  //네비게이션 메뉴
  $("header nav ul.gnb>li").hover(
    function () {
      $("ul.sub").stop().slideDown();
    },
    function () {
      $("ul.sub").stop().slideUp();
    }
  );
  //네비게이션 메뉴 끝

  //메인슬라이드
  $(".slide ul.slide_all > li").eq(0).siblings().css("top", "-300px");

  var slideI = 0;

  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide ul.slide_all>li").eq(slideI).animate({ top: "-300px" }, 300);
    $(".slide ul.slide_all>li").eq(slideI).animate({ top: "0" }, 300);
  }, 3000);
  //메인슬라이드 끝

  //탭메뉴 공지사항 갤러리
  $(".contents .notice_gal h3").click(function () {
    $(".contents .notice_gal h3").removeClass("on");
    $(this).addClass("on");
    $(".contents .notice_gal ul").removeClass("on");
    $(this).next("ul").addClass("on");
  });
  //탭메뉴 공지사항 갤러리 끝

  //레이어팝업
  $("ul.notice li")
    .eq(0)
    .click(function () {
      $(".modal").show();
    });

  $("button").click(function () {
    $(".modal").hide();
  });
  //레이퍼팝업 끝
}); //ready end
