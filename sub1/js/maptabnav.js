var mapcnt = $('.subTabNavs').size();

// $('.conMid .subMap').hide();
// $('.conMid .subMapEx').hide();

$('.conMid .subMap:eq(0)').show();
$('.conMid .subMapEx:eq(0)').show();

$('.conTop .subTabNav1').css('background','#f3f3f3');

$('.conTop .subTabNavs').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.conTop .subTabNavs');

    $('.conTop .subTabNavs').css('background','#fff');
    $(this).css('background','#f3f3f3');


    $('.conMid .subMap').hide();
    $('.conMid .subMap:eq('+ind+')').show();

    $('.conMid .subMapEx').hide();
    $('.conMid .subMapEx:eq('+ind+')').show();
})