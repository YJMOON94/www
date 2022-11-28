var con = $('.conTop').offset().top-180;

var con1 = $('.midTitle:eq(0)').offset().top+100;
var con2 = $('.midTitle:eq(1)').offset().top+100; 
var con3 = $('.midTitle:eq(2)').offset().top+100; 

$(window).on('scroll',function(){
   var scroll = $(window).scrollTop();
   var cnt = $('.conTop .conTop li').index();

   if(scroll>con){ 
       $('.conTab').addClass('conTopOn');
       $('.titleArea').css('margin-bottom',204);
       $('header').hide();
   }else{
       $('.conTab').removeClass('conTopOn');
       $('.titleArea').css('margin-bottom',0);
       $('header').show();
   }

   if(scroll>=0 && scroll<con2){
         cnt=0;
   }else if(scroll>=con2 && scroll<con3){
         cnt=1;
   }else if(scroll>=con3){
         cnt=2;
   };
   $('.conTab .conTop li a').removeClass('onSelect');
   $('.conTab .conTop li:eq('+cnt+') a').addClass('onSelect');

 })

$('.conTop ul li a').click(function(e){
    e.preventDefault();

     var value=0;

     if($(this).hasClass('tecCon1')){   
        value= con1; 
     }else if($(this).hasClass('tecCon2')){
        value= con2; 
     }else if($(this).hasClass('tecCon3')){
        value= con3; 
     }
   $("html,body").stop().animate({"scrollTop":(value)},1000);
 });
