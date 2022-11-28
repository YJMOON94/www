let ind = 0;
let useData = [];

function popUp(){
    $.ajax({

        method : 'get',
        url : './data/data2.json',
        dataType : 'json',

        success:function(data){
            useData = data.popConArray;

            let popContents = '';

            popContents += "<p>"+useData[ind].title+"</p>";
            popContents += "<img src='./images/sub3_2_con"+(ind+1)+"_01.png'>";
            popContents += "<dl>";
                popContents += "<dt>"+useData[ind].title1+"</dt>";
                popContents += "<dd>"+useData[ind].title1con1+"</dd>";
                popContents += "<dd>"+useData[ind].title1con2+"</dd>";
            popContents += "</dl>";

            popContents += "<img src='./images/sub3_2_con"+(ind+1)+"_02.png'>";
            popContents += "<dl>";
                popContents += "<dt>"+useData[ind].title2+"</dt>";
                popContents += "<dd>"+useData[ind].title2con1+"</dd>";
                popContents += "<dd>"+useData[ind].title2con2+"</dd>";
            popContents += "</dl>";

            $('.popCon').html(popContents);
        }
    })
};

$('.popBtn').click(function(e){
    e.preventDefault();

    ind = $(this).index('.popBtn');

    console.log(ind);
    $('.pop').fadeIn('slow');
    
    popUp();
});

$('.popClose').click(function(e){
    e.preventDefault();

    $('.pop').fadeOut('fast');
})