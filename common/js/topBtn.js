//top 이동 버튼
$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    
    if(scroll>600){
        $('.top').fadeIn();
    }else{
        $('.top').hide();
    }
})

$('.top').click(function(e){
    e.preventDefault();

    $("html,body").stop().animate({"scrollTop":0},1000);
 });

 // family site 효과
$('.family > a').toggle(function(e){
    e.preventDefault();
    $('.family ul').stop().slideDown(200);
  }, function(e){
    e.preventDefault();
    $('.family ul').stop().slideUp(200);
  })
  
  $('.family > a').on('focus', function(){
    // $('.familySite ul').animate({height:329.6}, 'slow').clearQueue();
    $('.family ul').stop().slideDown(200);
  });
  
  $('.family ul li:last a').on('blur', function(){
    $('.family ul').stop().slideUp(200);
  });