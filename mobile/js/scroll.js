let scrollEnd = true;

$(window).on('scroll',function(){

let scroll = $(window).scrollTop();

const mainHeight = $('.main').height()-300;

if(scroll>mainHeight){
    $('#headerArea').css({background:"rgba(0,0,0,.5)"});
}else{
    $('#headerArea').css({background:"rgba(0,0,0,.0)"});
}




let tecScroll = $('main').height()+$('.business').height()+$('.technique .introduce').height()+200;

if(scrollEnd == true){
    if(scroll>tecScroll){
        const increaseNum = $('.tecNumber').attr('data-rate');
        const increaseNum2 = $('.tecNumber2').attr('data-rate');
        const increaseNum3 = $('.tecNumber3').attr('data-rate');

        $({percent:0}).animate({percent:increaseNum},{
            duration:1500,
            progress:function(){
                const now = this.percent;
                $('.tecNumber').text("+"+Math.floor(now));
            }
        });
        $({percent:0}).animate({percent:increaseNum2},{
            duration:1500,
            progress:function(){
                const now = this.percent;
                $('.tecNumber2').text("+"+Math.floor(now)+'%');
            }
        });
        $({percent:0}).animate({percent:increaseNum3},{
            duration:1500,
            progress:function(){
                const now = this.percent;
                $('.tecNumber3').text("+"+Math.floor(now)+'%');
            }
        });
        scrollEnd = false;
    }
};
})