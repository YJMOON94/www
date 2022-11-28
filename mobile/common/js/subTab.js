$('.subnav>a').toggle(function(){
    $('.subnav ul').stop().slideDown('fast');
},function(){
    $('.subnav ul').stop().slideUp('fast');
})