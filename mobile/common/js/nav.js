// nav open&close
let navOpenClose = false;

$(".navBtn").click(function(e){
    e.preventDefault();

    const documentHeight = $(document).height();
    $("#gnb").css('height',documentHeight);

    if(navOpenClose == false){
        $("#gnb").animate({left:0,opacity:1},'fast');
        $(".headerInner").addClass("on");
        navOpenClose = true
    }else{
        $("#gnb").animate({left:'-100%', opacity:0},'fast');
        $('.headerInner').removeClass("on");
        navOpenClose = false
    }
});
// nav 2depth open&close
let onOff = [false,false,false,false];
const arrayCnt = onOff.length;
$(".depth1").click(function(e){
    e.preventDefault();
    
    let depthCnt = $(this).parents(".menu").index();

    console.log(depthCnt);

    if(onOff[depthCnt] == false){
        $(this).parents('.menu').find('ul').slideDown('slow');
        $(this).parents('.menu').siblings('li').find('ul').slideUp('slow');
        for(let i=0; i<arrayCnt; i++){
            onOff[i] = false;
        }
        onOff[depthCnt] = true;
        $('.icon').html('<i class="fa-solid fa-caret-down"></i>');
        $(this).find('.icon').html('<i class="fa-solid fa-caret-up"></i>');
    }else{
        $(this).parents('.menu').find('ul').slideUp('slow');
        $('.icon').html('<i class="fa-solid fa-caret-down"></i>');
        onOff[depthCnt] = false;
    }
});