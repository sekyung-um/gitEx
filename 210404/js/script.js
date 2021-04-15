$(document).ready(function () {
  var I = 0;

  setInterval(function () {
    if (I < 2) {
      I++;
    } else {
      I = 0;
    }

    $("img").eq(I).siblings().animate({ left: "-1200px" }, 1000);
    $("img").eq(I).animate({ left: "0" }, 1000);
    console.log(I);
  }, 3000);
});
