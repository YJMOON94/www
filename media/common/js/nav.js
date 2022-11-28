const openClose = document.querySelector('.gnbOC');
const nav = document.querySelector('#gnb')

let OC = false;
$(openClose).click((e)=>{
    e.preventDefault();

    if(OC==false){
        $(nav).fadeIn('slow');
        $('.gnbOC span').css('background','rgba(255,255,255,.0)');
        $('.gnbOC').addClass('gnbOpen');
        OC = true;
    }else{
        $(nav).fadeOut('fast');
        $('.gnbOC span').css('background','#19f6e8');
        $('.gnbOC').removeClass('gnbOpen');
        OC = false
    }
});

function reset(){
    let screenSize = $(window).width();
    if(screenSize > 1024){
        $(nav).css('display','block');
        $('.gnbOC').addClass('gnbOpen');
        $('.gnbOC span').css('background','rgba(255,255,255,.0)');
    }

    if(screenSize <= 1024){
        $(nav).css('display','none');
        $('.gnbOC').removeClass('gnbOpen');
        $('.gnbOC span').css('background','#19f6e8');
    }
}
$(window).resize(function(){
    reset();
})