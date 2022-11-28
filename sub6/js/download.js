$(function(){

var useData = [];

$.ajax({
    method : 'get',
    url : './data/download.json',
    dataType : 'json',
    success:function(data){
        useData = data.download;
        
        function dataPrint(){
        var list = '';

        list +='<ul>';

        for(var i=0; i<useData.length; i++){

            var $num = useData[i].num;
            var $content = useData[i].content;
            var $writter = useData[i].writter;
            var $day = useData[i].day;
            var $opencnt = useData[i].opencnt;
            
            list +='<li>';
            list +='<span class="listWidth1">'+$num+'</span>';
            list +='<div class="listWidth2"><a href="#">'+$content+'</a></div>';
            list +='<div class="listWidth3">'+$writter+'</div>';
            list +='<div class="listWidth4">'+$day+'</div>';
            list +='<span class="openCnt listWidth5">'+$opencnt+'</span>';
            list +='</li>';
        }

        list +='</ul>';
        
        $('.listBody').html(list);
    };
        dataPrint();
    }
});

});