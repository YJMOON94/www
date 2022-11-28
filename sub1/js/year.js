 var yearHeight = $('.conTop').offset().top-180;
 var year2022 = $('.year2022').offset().top;
 var year2019 = $('.year2019').offset().top-200;
 var year2010 = $('.year2010').offset().top-200;
 var year2000 = $('.year2000').offset().top-200;

console.log(year2019,year2010,year2000);

$(window).on('scroll',function(){
   var scroll = $(window).scrollTop();
   var cnt = $('.conTop .conTop li').index();

   if(scroll>yearHeight){ 
       $('.conTab').addClass('conTopOn');
       $('.conBtm').css('padding-top',100);
       $('header').hide();
   }else{
       $('.conTab').removeClass('conTopOn');
       $('.conBtm').css('padding-top',0);
       $('header').show();
   }

   if(scroll>=0 && scroll<year2019){
         cnt=0;
   }else if(scroll>=year2019 && scroll<year2010){
         cnt=1;
   }else if(scroll>=year2010 && scroll<year2000){
         cnt=2;
   }else if(scroll>=year2000){
         cnt=3;
   }
   $('.conTab .conTop li a').removeClass('onSelect');
   $('.conTab .conTop li:eq('+cnt+') a').addClass('onSelect');

 })
 
 $('.conTop ul li a').click(function(e){
    e.preventDefault();

     var value=0;

     if($(this).hasClass('link2022')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
        value = year2022+100;
     }else if($(this).hasClass('link2019')){
        value= year2019;
     }else if($(this).hasClass('link2010')){
        value= year2010;
     }else if($(this).hasClass('link2000')){
        value= year2000;
     }
     
   $("html,body").stop().animate({"scrollTop":(value-180)},1000);
 });