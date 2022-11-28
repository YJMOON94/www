
$(document).ready(function() {

   var smh=$('.main').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           $('.dropdownmenu li a, .login li a').css('color','#333');
           $('.logomenu h1 a').css('background','url("https://jasika.cafe24.com/common/css/../images/logo2.png") no-repeat');
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-50 ){
               $(this).css('background','rgba(0,0,0,.4)').css('border-bottom','none'); 
               $('.dropdownmenu li a, .login li a').css('color','#fff');
               $('.logomenu h1 a').css('background','url("https://jasika.cafe24.com/common/css/../images/logo.png") no-repeat'); 
           }else{
               $(this).css('background','#fff'); 
               $('.dropdownmenu li a, .login li a').css('color','#333');
               $('.logomenu h1 a').css('background','url("https://jasika.cafe24.com/common/css/../images/logo2.png") no-repeat'); 
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수

           if(scroll>smh-50){//스크롤300까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               $('.dropdownmenu li a, .login li a').css('color','#333');
               $('.logomenu h1 a').css('background','url("https://jasika.cafe24.com/common/css/../images/logo2.png") no-repeat');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){ // 마우스가 헤더에 안오버 했을때 만 
                   $('#headerArea').css('background','rgba(0,0,0,.4)').css('border-bottom','none');
                   $('.dropdownmenu li a, .login li a').css('color','#fff');
                   $('.logomenu h1 a').css('background','url("https://jasika.cafe24.com/common/css/../images/logo.png") no-repeat');
              }
           }; 
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:420},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:185},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#039');
           $(this).css('height','350px');
       },function() {
          $('.depth1',this).css('color','#333');
          $(this).css('height','50px');
     });

     //2depth 효과
     $('ul.dropdownmenu li.menu ul li a').hover(
        function(){
            $(this).css('color','#039');
            $(this).css('background','#fafafa');
        },
        function(){
            $(this).css('color','#333');
            $(this).css('background','#fff');
        }
     )
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:420},'fast').clearQueue();

     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:185},'normal').clearQueue();

    });
});
