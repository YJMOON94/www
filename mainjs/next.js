// main 영역
var timeonoff;
var imageCount=$('.main .gallery ul li').size();
var maincnt = 1;
var direct = 1;
var position = 0;
var onoff = true;

$('.btn1').addClass('on');
$('.main .gallery_text li:eq(0)').delay(500).fadeIn('slow')

function moveg(){
    maincnt+=direct;

    position = -(maincnt-1)*2000;
    $('.main .gallery').animate({left:position},'slow');

    $('.main .gallery_text li').hide();
    $('.main .gallery_text li:eq('+(maincnt-1)+')').delay(500).fadeIn('slow');

    $('.mbutton').removeClass('on');
    $('.main .btn'+maincnt).addClass('on');

    if(maincnt==imageCount){
        direct = -1;
    };
    if(maincnt==1){
        direct = 1;
    };
}

timeonoff = setInterval(moveg,4000);

$('.mbutton').click(function(event){

    var $target = $(event.target);
    clearInterval(timeonoff);

    for(var i=1; i<imageCount; i++){
        $('.main .dock .btn'+i+'::after').css('left',-100);//디폴트
        $('.main .dock .btn'+i+'::after').animate({left:0},4000);//움직임 애니메이션
    }

    if($target.is('.btn1')){
        $('.main .gallery').animate({left:0},'slow');
        maincnt=1;
        direct=1;
    }else if($target.is('.btn2')){
        $('.main .gallery').animate({left:-2000},'slow');
        maincnt=2;
    }else if($target.is('.btn3')){
        $('.main .gallery').animate({left:-4000},'slow');
        maincnt=3;
        direct=-1;
    }

    $('.main .gallery_text li').hide();
    $('.main .gallery_text li:eq('+(maincnt-1)+')').delay(500).fadeIn('slow');

    $('.mbutton').removeClass('on');
    $('.main .btn'+maincnt).addClass('on');

    timeonoff = setInterval(moveg,4000);

    if(onoff==false){
        onoff=true;
        $('.ps').css('background','url(./images/stop.png) no-repeat').css('background-size',15);
    };
    
});

$('.ps').click(function(){
    if(onoff==true){
        clearInterval(timeonoff);
        $(this).css('background','url(./images/play.png) no-repeat').css('background-size',15);
        onoff = false;
    }else{
        timeonoff = setInterval(moveg,4000);
        $(this).css('background','url(./images/stop.png) no-repeat').css('background-size',15);
        onoff = true;
    }
});

$('.main .btn').click(function(){
    clearInterval(timeonoff);

    if($(this).is('.btnRight')){
        if(maincnt==imageCount)maincnt=0;
        if(maincnt==imageCount+1)maincnt=1;
         maincnt++; 
    }else if($(this).is('.btnLeft')){
         if(maincnt==1)maincnt=imageCount+1;
         if(maincnt==0)maincnt=imageCount;
         maincnt--;
     };

     $('.main .gallery').animate({left:(maincnt-1)*-2000},'slow').clearQueue();

     $('.main .gallery_text li').hide();
     $('.main .gallery_text li:eq('+ (maincnt-1) +')').fadeIn('slow').delay(500);
     
     $('.main .mbutton').removeClass('on');
     $('.main .btn'+maincnt).addClass('on');

     if($(this).is('.btnRight')){
        if(maincnt==imageCount){maincnt=0; direct=1;}
     }else if($(this).is('.btnLeft')){
        if(maincnt==1){maincnt=imageCount+1; direct=-1;}
     }

    timeonoff= setInterval( moveg , 4000);

    if(onoff==false){
        onoff=true;
        $('.ps').css('background','url(images/stop.png)').css('background-size',15);
    }
})
//solution영역
var sltnImgChange = 0;
var sltntotal = $('.solution div:eq(1) ul').size();
$('.solution .div:eq(1) .green').fadeIn();

$('.solution .circleBox a').click(function(e){
    e.preventDefault();
    sltnImgChange++;
    if(sltnImgChange==sltntotal){
        sltnImgChange=0;
    }
    $('.layOut').hide();
    $('.solution div:eq(1) ul:eq('+sltnImgChange+')').fadeIn('slow');
});

//technique영역
var tecposition = 0;
var movesize = $('.eventMenu').width();

var copyCon = document.querySelector('.slide_gallery ul');
var copyIn = document.querySelector('.slide_gallery');
var copyUL = copyCon.cloneNode(true);

copyIn.appendChild(copyUL);

// $('.slide_gallery ul').after($('.slide_gallery ul').clone()); 
// jQuery

$(document).on('click','.tecLR',function(e){
    e.preventDefault();

    if($(this).is('.left')){
        if(tecposition == -1800){
            $('.slide_gallery').css('left',0);
            tecposition = 0;
        }
        tecposition -= movesize;
        $('.slide_gallery').stop().animate({left:tecposition},'fast',function(){
            if(tecposition <= -1800){
                $('.slide_gallery').css('left',0);
                tecposition = 0;
            }
        })
    }else if($(this).is('.right')){
        if(tecposition == 0){
            $('.slide_gallery').css('left',-1800);
            tecposition = -1800;
        }
        tecposition += movesize;
        $('.slide_gallery').stop().animate({left:tecposition},'fast',function(){
            if(tecposition > 0){
                $('.slide_gallery').css('left',-1800);
                tecposition = -1800;
            }
        })
    };
})