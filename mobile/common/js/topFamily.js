$(window).on('scroll',function(){
var scroll = $(window).scrollTop();
const mainHeight = $('.main').height();
    
if(scroll>mainHeight){
    $('.top').fadeIn();
}else{
    $('.top').hide();
};

if(scroll>mainHeight){
    $('#headerArea').css({background:"rgba(0,0,0,.5)"});
}else{
    $('#headerArea').css({background:"rgba(0,0,0,.0)"});
}
})

$('.top').click(function(e){
e.preventDefault();

$("html,body").stop().animate({"scrollTop":0},1000);
});

// family site 효과
$('.family > a').toggle(function(e){
e.preventDefault();
// $('.familySite ul').animate({height:329.6}, 'slow').clearQueue();
$('.family ul').stop().slideDown(200);
}, function(e){
e.preventDefault();
// $('.familySite ul').animate({height:0}, 'fast').clearQueue();
$('.family ul').stop().slideUp(200);
})

$('.family > a').on('focus', function(){
// $('.familySite ul').animate({height:329.6}, 'slow').clearQueue();
$('.family ul').stop().slideDown(200);
});

$('.family ul li:last a').on('blur', function(){
// $('.familySite ul').animate({height:0}, 'slow').clearQueue();
$('.family ul').stop().slideUp(200);
});