$('.conMid .gallery li:eq(0)').show();
$('.conMid .blueBox ul li:eq(0)').show();
$('.conMid .galleryCnt').show();
$('.textBox dl:eq(0)').show();

$('.conBtm .gallery li:eq(0)').show();
$('.conBtm .blueBox ul li:eq(0)').show();
$('.conBtm .galleryCnt').show();
$('.textBox:eq(1) dl:eq(0)').show();
var galleryInd = 0;
var galleryCnt = $('.conMid .gallery li').size();
$('.conMid .galleryBtn').click(function(e){
    e.preventDefault();

    if($(this).is('.galleryBtnR')){
        galleryInd++;
        if(galleryInd==galleryCnt)galleryInd=0;
    }else if($(this).is('.galleryBtnL')){
        if(galleryInd==0)galleryInd=galleryCnt;
        if(galleryInd==-1)galleryInd=galleryCnt;
        galleryInd--;
    };

    $('.conMid .gallery li').hide();
    $('.conMid .gallery li:eq('+galleryInd+')').fadeIn();

    $('.conMid .blueBox ul:eq(0) li').hide();
    $('.conMid .blueBox ul li:eq('+galleryInd+')').fadeIn();

    $('.textBox:eq(0) dl').hide();
    $('.textBox:eq(0) dl:eq('+galleryInd+')').fadeIn();

    $('.conMid .galleryCnt').hide();
    $('.conMid .galleryCnt').text(''+(galleryInd+1)+'').fadeIn();
});

$('.conBtm .galleryBtn').click(function(e){
    e.preventDefault();

    if($(this).is('.galleryBtnR')){
        galleryInd++;
        if(galleryInd==galleryCnt)galleryInd=0;
    }else if($(this).is('.galleryBtnL')){
        if(galleryInd==0)galleryInd=galleryCnt;
        if(galleryInd==-1)galleryInd=galleryCnt;
        galleryInd--;
    };

    $('.conBtm .gallery li').hide();
    $('.conBtm .gallery li:eq('+galleryInd+')').fadeIn();

    $('.conBtm .blueBox ul:eq(0) li').hide();
    $('.conBtm .blueBox ul li:eq('+galleryInd+')').fadeIn();

    $('.textBox:eq(1) dl').hide();
    $('.textBox:eq(1) dl:eq('+galleryInd+')').fadeIn();

    $('.conBtm .galleryCnt').hide();
    $('.conBtm .galleryCnt').text(''+(galleryInd+1)+'').fadeIn();
})
