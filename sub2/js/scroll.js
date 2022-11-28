$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();

    if(scroll>450){
        $('.conTop>div').addClass('topOpacityOn');
    };
    if(scroll>900){
        $('.conTop .leftCon li:eq(0)').addClass('opacityLeftOn');
        $('.conTop .rightCon li:eq(0)').addClass('opacityLeftOn');
    };
    if(scroll>1800){
        $('.conTop .leftCon li:eq(1)').addClass('opacityLeftOn');
        $('.conTop .rightCon li:eq(1)').addClass('opacityLeftOn');
    };
    if(scroll>2900){
        $('.conMid>div').addClass('topOpacityOn');
    };
    if(scroll>3400){
        $('.conMid .leftCon').addClass('opacityLeftOn');
        $('.conMid .rightCon').addClass('opacityLeftOn');
    };
    if(scroll>4300){
        $('.conBtm').addClass('topOpacityOn');
    };
    if(scroll>4600){
        $('.chart').addClass('topOpacityOn');
    };
    console.log(scroll);
})