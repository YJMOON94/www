var useData = [];
var busiImgChange = 0;
function businessPrint(){
    $.ajax({
        method : 'get',
        url : './data/data.json',
        dataType : 'json',

        success:function(data){

            useData = data.business;
                var changeImg = '';
                    changeImg += '<li>';
                        changeImg += '<img src="'+useData[busiImgChange].img+'" alt="'+useData[busiImgChange].imgAlt+'">';
                    changeImg += '</li>';

                $('.business .gallery ul').html(changeImg);

                var print = '';
                print += '<li>';
                    print += '<h4>'+useData[busiImgChange].heading+'</h4>';
                    print += '<p>'+useData[busiImgChange].content+'</p>';
                    print += '<a href="'+useData[busiImgChange].link+'" class="arrowAni">View More<i class="fa-solid fa-arrow-right-long"></i></a>'
                print += '</li>';
                
                $('.businessText').html(print);
            }
        })
    }
    
    businessPrint();
    var businessTotal = useData.length;

    $('.business .right').click(function(e){
        e.preventDefault();
        busiImgChange++;
        if(busiImgChange == useData.length)busiImgChange = 0;
        businessPrint();
        $('.businessText').hide().stop().fadeIn('fast');
        $('.business .galleryBox').hide().stop().fadeIn('fast');
    });
    $('.business .left').click(function(e){
        e.preventDefault();
        busiImgChange--;
        if(busiImgChange == -1)busiImgChange = useData.length-1;
        businessPrint();
        $('.businessText').hide().stop().fadeIn('fast');
        $('.business .galleryBox').hide().stop().fadeIn('fast');
    })