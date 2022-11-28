var useData = [];
var i = 0;
var j = 0;

function dataPrint(){
$.ajax({

    method : 'get',
    url : '../../sub2/data/data.json',
    dataType : 'json',

    success:function(data){

        useData = data.ships;

        var shiptitle = '';
        var shiptxt ='';
        var shipimg = '';


        shiptitle += '<li>'+useData[i].title+'</li>';

        shiptxt += '<dl>';
        shiptxt +=     '<dt>'+useData[i].subtitle+'</dt>';
        shiptxt +=     '<dd>'+useData[i].con1+'</dd>';
        shiptxt +=     '<dd>'+useData[i].con2+'</dd>';
        shiptxt +=     '<dd>'+useData[i].con3+'</dd>';
        shiptxt += '</dl>';

        shipimg +=  '<img src="./images/ship640_0'+(i+1)+'.png" alt="'+useData[j].imgAlt+'">'
        

        $('.conMid .blueBox ul:eq(1)').html(shiptitle);
        $('.textBox:eq(0)').html(shiptxt);
        $('.conMid .gallery li').html(shipimg);
        
        $('.conMid .galleryCnt').text(i+1);

        useData2 = data.sea;

        var shiptitle2 = '';
        var shiptxt2 ='';
        var shipimg2 = '';


        shiptitle2 += '<li>'+useData2[j].title+'</li>';

        shiptxt2 += '<dl>';
        shiptxt2 +=     '<dt>'+useData2[j].subtitle+'</dt>';
        shiptxt2 +=     '<dd>'+useData2[j].con1+'</dd>';
        shiptxt2 +=     '<dd>'+useData2[j].con2+'</dd>';
        shiptxt2 +=     '<dd>'+useData2[j].con3+'</dd>';
        shiptxt2 += '</dl>';

        shipimg2 += '<img src="./images/business640_0'+(j+1)+'.png" alt="'+useData2[j].imgAlt+'">'
        

        $('.conBtm .blueBox ul:eq(1)').html(shiptitle2);
        $('.textBox:eq(1)').html(shiptxt2);
        $('.conBtm .gallery li').html(shipimg2);
        
        $('.conBtm .galleryCnt').text(j+1);
    }
});
}

dataPrint();

$('.conMid a.galleryBtn').click(function(e){
    e.preventDefault();

    if($(this).hasClass('galleryBtnL')){
       if(i==0)i=useData.length; 
       i--;
       dataPrint();
    }else if($(this).hasClass('galleryBtnR')){
       if(i==useData.length-1)i=-1;
       i++;
       dataPrint();
    }
    
});

$('.conBtm a.galleryBtn').click(function(e){
    e.preventDefault();

    if($(this).hasClass('galleryBtnL')){
       if(j==0)j=useData.length; 
       j--;
       dataPrint();
    }else if($(this).hasClass('galleryBtnR')){
       if(j==useData.length-1)j=-1;
       j++;
       dataPrint();
    }
    
});