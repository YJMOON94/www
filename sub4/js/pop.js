
var position = 0;
var movesize = 4;
var timeonoff;

$('.pdfBox ul').after($('.pdfBox ul').clone());

function pdfMove(){
    position -= movesize;
    $('.pdfBox').css('left',position);
    if(position < -1800){
        $('.pdfBox').css('left',0);
        position = 0;
    }
};

timeonoff = setInterval(pdfMove, 30);

$('.pdfBox').hover(function(){
    clearInterval(timeonoff);
},function(){
    timeonoff = setInterval(pdfMove, 30);
})

var pop_text = [
    {title:'2020',
    subtitle:'COVID-19 대응활동',
    subcon:'2020년 3월 세계보건기구(WHO)는 코로나바이러스감염증-19(COVID-19)에 대해 팬데믹(세계적 대유행)을 선언',
    subcon2:'삼성중공업은 COVID-19를 단순히 공중보건의 위기가 아닌 모든 분야에 영향을 미치는 위기로 인식하고 선제적으로 대응하고 있습니다.'},
    {title:'2019',
    subtitle:'SMART SHIP 기술 개발',
    subcon:'2030년까지 무인 운항선 개발로 스마트 기술 선도',
    subcon2:'삼성중공업은 인공지능(AI), 사물인터넷(IoT),자동화 등 첨단 기술을 융합한 스마트십 기술 개발에 박차를 가하며, 앞으로 다가올 자율운항선박 시장 진출에 적극 대비하고 있습니다.'},
    {title:'2018',
    subtitle:'S-EVM 운영체계',
    subcon:'시스템 경영 수준 제고를 통해 모방 불가능한 경쟁력 확보',
    subcon2:'삼성 중공업은 세계 최고 수주역량 확보와 더불어 원가 경쟁력 또한 확보하여 설계와 조달에 차질이 없도록 관리하고 있습니다.'},
    {title:'2017',
    subtitle:'UN 지속가능발전 목표 수립',
    subcon:'LNG 연료공급 시스템을 자체 개발해 엔진별 최적의 LNG FGSS를 제공',
    subcon2:'최근 2행정 LNG 연료 추진 엔진이 LNG선에 적용되고 있으며 ME-GI 엔진은 300bar 의 고압 FGSS가 요구되며, X-DF엔진은 16bar 의 저압 FGSS가 요구됩니다.'},
    {title:'2016',
    subtitle:'LNG 연료공급 시스템 구축',
    subcon:'모든 임직원이 쉽고 · 빠르고 · 편하고 · 안전하게 근무할 수 있는 작업장을 구축',
    subcon2:'더욱 깨끗한 작업 환경과 여건을 조성하기 위한 5S 3정 활동을 2015년 도입했습니다. 5S 3정 활동을 통한 조선소 내 쾌적한 환경, 정돈된 공간 조성은 실제 생산성을 향상시켰습니다.'},
    {title:'2015',
    subtitle:'생산성 향상 및 경쟁력 강화',
    subcon:'2015년 경영방침을 ‘생존을 위한 질적 경쟁력 강화’로 설정하고 모든 공정에서 리드타임 단축',
    subcon2:'글로벌 경기 위축에 따른 물동량 감소와 유가의 지속적인 하락 등으로 인한 조선‧해양 분야의 침체가 지속됨에 따라 생산성 향상, 비효율 요소 제거를 위한 과감한 혁신을 진행해오고 있습니다.'}
]

var ind = 0;
var txt ='';

function popchange(){
    if(ind>=6){
        ind -= 6;
    }

    $('.popUp img').attr('src','./images/report'+(ind+1)+'.jpg');
    txt ='';
    txt+='<p>삼성중공업 지속가능 경영 보고서 '+pop_text[ind].title+'</p>'
    txt+='<dl>';
    txt+='<dt>'+pop_text[ind].subtitle+'</dt>';
    txt+='<dd>'+pop_text[ind].subcon+'</dd>';
    txt+='<dd>'+pop_text[ind].subcon2+'</dd>';
    txt+='</dl>';
    
    $('.popUp .popText').html(txt);
    
}

$('.popBtn').click(function(e){
    e.preventDefault();

    ind = $(this).index('.popBtn'); // 0 1 2 3 4 5
    console.log(ind);
    $('.popUpBackground').fadeIn('fast');
    $('.popUp').fadeIn('slow');
    $('.popLR').fadeIn('slow');

    popchange();
})

$('.pop .popClose, .popUpBackground').click(function(e){
    e.preventDefault();

    $('.popUpBackground').fadeOut('fast');
    $('.popUp').fadeOut('fast');
    $('.popLR').fadeOut('fast');
})

$('.popLR a').click(function(e){
    e.preventDefault();

    $('.pop .popUp').hide().fadeIn('slow');

    if($(this).hasClass('popLeft')){
        if(ind==0){
            ind=pop_text.length;
        }
        ind--;
        popchange();
    }else if($(this).hasClass('popRight')){
        if(ind==pop_text.length-1){
            ind= -1;
        }
        ind++;
        popchange();
    }
})
