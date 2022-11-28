var scrollEnd = true;

$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    //busi
    if(scroll>600){
        $('.business').addClass('topOpacityOn');
        $('.business .gallery').addClass('opacityLeftOn');
        $('.business .businessBox').addClass('opacityLeftOn');
    };
    //sltn
    if(scroll>1500){
        $('.solution').addClass('topOpacityOn');
    };
    //tec
    if(scrollEnd == true){
        if(scroll>2800){
            var increaseNum = $('.tecNumber').attr('data-rate');
            var increaseNum2 = $('.tecNumber2').attr('data-rate');
            var increaseNum3 = $('.tecNumber3').attr('data-rate');

            $({percent:0}).animate({percent:increaseNum},{
                duration:1500,
                progress:function(){
                    var now = this.percent;
                    $('.tecNumber').text(Math.floor(now));
                }
            });
            $({percent:0}).animate({percent:increaseNum2},{
                duration:1500,
                progress:function(){
                    var now = this.percent;
                    $('.tecNumber2').text(Math.floor(now)+'%');
                }
            });
            $({percent:0}).animate({percent:increaseNum3},{
                duration:1500,
                progress:function(){
                    var now = this.percent;
                    $('.tecNumber3').text(Math.floor(now)+'%');
                }
            });
            scrollEnd = false;
        }
    };
    //news
    if(scroll>4000){
        $('.news').addClass('topOpacityOn');
    }
    //value
    if(scroll>5100){
        $('.value').addClass('topOpacityOn');

        for(i=0; i<$('.value ul li').length; i++){
            $('.value ul li:eq('+i+')').addClass('topOpacityOn');
        };

    };
})
