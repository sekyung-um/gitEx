$(document).ready(function () {
  $("header nav .gnb > li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown();
    },
    function () {
      $(this).find("ul.sub").stop().slideUp();
    }
  );

  $(".contents .con1 .notice li")
    .eq(0)
    .click(function () {
      $(".modal").show();
    });

  $("button").click(function () {
    $(".modal").hide();
  });

  $(".contents ul.slide li").eq(0).siblings().css("left", "-800px");

  var I = 0;

  setInterval(function () {
    if (I < 2) {
      I++;
    } else {
      I = 0;
    }

    // $(".contents ul.slide li").eq(I).siblings().fadeOut();
    // $(".contents ul.slide li").eq(I).fadeIn();

    $(".contents ul.slide li").eq(I).siblings().animate({ left: "-800px" });
    $(".contents ul.slide li").eq(I).animate({ left: "0" });

    console.log(I);
  }, 3000);
});
