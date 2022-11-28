var article = $('.qna .article');  
article.find('.answer').slideUp(1000); 
$('.qna .article:first').find('.answer').slideDown(500);

$('.qna .article').mouseenter(function(){
    $(this).css('background','#f9f9f9');
})
$('.qna .article').mouseleave(function(){
    $(this).css('background','#fff').css('color','#333');
})

$('.qna .article .trigger').click(function(e){  
    e.preventDefault(); 
    var myArticle = $(this).parents('.article'); 

    if(myArticle.hasClass('hide')){   
        article.find('.answer').slideUp(500); 
        article.removeClass('show').addClass('hide'); 

        myArticle.removeClass('hide').addClass('show');  
        myArticle.find('.answer').slideDown(500); 
    } else { 
        myArticle.removeClass('show').addClass('hide'); 
        myArticle.find('.answer').slideUp(500);  
  
    }  
});

$('.all').toggle(function(e){
    e.preventDefault(); 
    article.find('.answer').slideDown(500);
    article.removeClass('hide').addClass('show');
    $('.all .hidden').text('모두닫기');
    $(this).css('background','url(./images/down.png)no-repeat');
},function(e){
    e.preventDefault(); 
    article.find('.answer').slideUp(500);
    article.removeClass('show').addClass('hide');
    $('.all .hidden').text('모두열기');
    $(this).css('background','url(./images/up.png)no-repeat')
});