// 탭1
$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();

    if(scroll>600){
        $('.conMid').addClass('topOpacityOn');
    };
    if(scroll>1500){
        $('.conBtn li:eq(0)').addClass('opacityLeftOn');
    };
    if(scroll>1750){
        $('.conBtn li:eq(1)').addClass('opacityLeftOn');
    };
    if(scroll>2050){
        $('.conBtn li:eq(2)').addClass('opacityLeftOn');
    };
    console.log(scroll);
})