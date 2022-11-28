let dragValue =null;
let element = document.getElementById('controlBtn');
let innerScreenWidth = window.innerWidth;
const dragTarget = document.getElementById('controlTarget');

element.style.position = 'absolute';


// drag start
function move(e){
    dragValue = element;
};

//drag end
function mouseUp(e){
    dragValue = null;
};

//pc dragging
function mouseMove(e){

        let x = e.pageX; // pc 터치 좌표
    
        dragValue.style.left = x + "px";
        dragTarget.style.left = x + "px";
    
        let movingPercent = (x/innerScreenWidth)*100;

        console.log(movingPercent);
        if(movingPercent<50){
    
            $('.story .textLR ul li:nth-of-type(1)').css('opacity',0).css('left','5%').css('top','50%');
            $('.story .textLR ul li:nth-of-type(2)').css('top','15%').css('right','35%').css('opacity',1);
    
            $('.dragshowR .left').css('top','25%').css('opacity',1);
            $('.dragshowR .right').css('top','25%').css('opacity',1);
    
            $('.dragshowL dl').css('top','45%').css('opacity',0);
            $('.dragshowL ul').css('top','30%').css('opacity',0)
        }
        if(movingPercent>50){
            $('.story .textLR ul li:nth-of-type(1)').css('top','15%').css('left','35%').css('opacity',1);
            $('.story .textLR ul li:nth-of-type(2)').css('opacity',0).css('right','5%').css('top','50%');
    
            $('.dragshowR .left').css('top','30%').css('opacity',0);
            $('.dragshowR .right').css('top','30%').css('opacity',0);
    
            $('.dragshowL dl').css('top','40%').css('opacity',1);
            $('.dragshowL ul').css('top','25%').css('opacity',1)
        }

    };

//mobile dragging
function mobileMove(e){
    e.preventDefault();

    let x = e.touches[0].pageX ; // 모바일 터치 좌표

    dragValue.style.left = x + "px";
    dragTarget.style.left = x + "px";

    let movingPercent = (x/innerScreenWidth)*100;

    if(movingPercent<50){

        $('.story .textLR ul li:nth-of-type(1)').css('opacity',0).css('left','5%').css('top','50%');
        $('.story .textLR ul li:nth-of-type(2)').css('top','15%').css('right','35%').css('opacity',1);

        $('.dragshowR .left').css('top','25%').css('opacity',1);
        $('.dragshowR .right').css('top','25%').css('opacity',1);

        $('.dragshowL dl').css('top','45%').css('opacity',0);
        $('.dragshowL ul').css('top','30%').css('opacity',0) 
    }
    if(movingPercent>50){
        $('.story .textLR ul li:nth-of-type(1)').css('top','15%').css('left','35%').css('opacity',1);
        $('.story .textLR ul li:nth-of-type(2)').css('opacity',0).css('right','5%').css('top','50%');

        $('.dragshowR .left').css('top','30%').css('opacity',0);
        $('.dragshowR .right').css('top','30%').css('opacity',0);

        $('.dragshowL dl').css('top','40%').css('opacity',1);
        $('.dragshowL ul').css('top','25%').css('opacity',1)
    }

};

element.addEventListener('touchstart',move);
document.addEventListener('touchmove',mobileMove);
document.addEventListener('touchend',mouseUp);

element.addEventListener('mousedown',move);
document.addEventListener('mousemove',mouseMove);
document.addEventListener('mouseup',mouseUp);

