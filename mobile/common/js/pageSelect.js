function getParameter(){
    
    let parameter = '';
    let key = '', value='';
    
    const url = decodeURIComponent(location.href);
    parameter = url.substring(url.indexOf('?')+1,url.length);
    value = parameter.split('=')[1];
    key = Number(value);

    console.log(url,parameter,value,key);

    if(key==1){
        $('#gnb .m1 .depth1').css('background','#f3f3f3');
    }else if(key==2){
        $('#gnb .m2 .depth1').css('background','#f3f3f3');
    }else if(key==3){
        $('#gnb .m3 .depth1').css('background','#f3f3f3');
    }else if(key==4){
        $('#gnb .m4 .depth1').css('background','#f3f3f3');
    }
}

getParameter();