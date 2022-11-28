
let aboutHeight1 = $('.terran').offset().top -500 ;;
let aboutHeight2 = $('.protoss').offset().top -500 ;;
let aboutHeight3 = $('.zerg').offset().top -500 ;;
let storyHeight = $('.story').offset().top -500 ;
let trailerHeight = $('.trailer').offset().top -500 ;
let galleryHeight = $('.gallery').offset().top -500 ;


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
    if(scroll>storyHeight){
        $('.story').addClass('scrollon');
    }
    if(scroll>trailerHeight){
        $('.trailer').addClass('scrollon');
    }
    if(scroll>galleryHeight){
        $('.gallery').addClass('scrollon');
    }

})
console.log(aboutHeight1,storyHeight,trailerHeight,galleryHeight);