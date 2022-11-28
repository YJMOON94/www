$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();

    if(scroll>450){
        $('.conTop li:eq(0)').addClass('opacityLeftOn');
    };
    if(scroll>1140){
        $('.conTop li:eq(1)').addClass('opacityLeftOn');
    };
    if(scroll>1700){
        $('.conTop li:eq(2)').addClass('opacityLeftOn');
    };
    if(scroll>2300){
        $('.conBtm').addClass('topOpacityOn');
    };
    console.log(scroll);
})