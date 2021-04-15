$(document).ready(function(){
    $(".sub").hide();
    $(".modal").hide();
    
    
    
    //네비게이션
    $(".gnb").mouseover(function(){
        $(".sub").stop().slideDown();
    });
    $(".gnb").mouseout(function(){
        $(".sub").stop().slideUp();
    });
    
    
    
    //이미지 슬라이드
    $(".slide li").eq(0).show();
    $(".slide li").eq(0).siblings().hide();

    var i = 0;
    setInterval(function(){
     i++;
     if(i==3){
      i=0;
     }
     $(".slide li").eq(i).fadeIn(1000);
     $(".slide li").eq(i-1).fadeOut(1000);
    },3000);
    
    
    
    //모달 창
    $("#notice li").eq(0).click(function(){
        $(".modal").show();
    });
    
    $(".modal .cancel").click(function(){
        $(".modal").hide();
    });
    
});