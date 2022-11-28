const skillText = $('.skillText').size();

$('.mainContent>ul>li:eq(0) .textShow').click(function(){
    
    let ind = $(this).index('.mainContent>ul>li:eq(0) .textShow');

    $('.mainContent>ul>li:eq(0) .skillBox').show('slow');

    $('.mainContent>ul>li:eq(0) .skillText').css('opacity',0)
    $('.mainContent>ul>li:eq(0) .skillText:eq('+ind+')').css('opacity',1)

})

$('.mainContent>ul>li:eq(1) .textShow').click(function(){
    
    let ind = $(this).index('.mainContent>ul>li:eq(1) .textShow');

    $('.mainContent>ul>li:eq(1) .skillBox').show('slow');

    $('.mainContent>ul>li:eq(1) .skillText').css('opacity',0)
    $('.mainContent>ul>li:eq(1) .skillText:eq('+ind+')').css('opacity',1)

})

$('.mainContent>ul>li:eq(2) .textShow').click(function(){
    
    let ind = $(this).index('.mainContent>ul>li:eq(2) .textShow');

    $('.mainContent>ul>li:eq(2) .skillBox').show('slow');

    $('.mainContent>ul>li:eq(2) .skillText').css('opacity',0)
    $('.mainContent>ul>li:eq(2) .skillText:eq('+ind+')').css('opacity',1)

})

let aboutHeight1 = $('.terran').offset().top -500 ;;
let aboutHeight2 = $('.protoss').offset().top -500 ;;
let aboutHeight3 = $('.zerg').offset().top -500 ;;
let trailerHeight = $('.trailer').offset().top -500 ;


$(window).on('scroll',function(){
    let scroll = $(window).scrollTop();

    if(scroll>aboutHeight1){
        $('.terran').addClass('scrollon');
    }
    if(scroll>aboutHeight2){
        $('.protoss').addClass('scrollon');
    }
    if(scroll>aboutHeight3){
        $('.zerg').addClass('scrollon');
    }
    if(scroll>trailerHeight){
        $('.trailer').addClass('scrollon');
    }

})