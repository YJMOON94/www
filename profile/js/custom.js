$(document).ready(function(){

var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   }
   else{ //한문장이끝나면
     //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
     if(liIndex>=liLength-1){
       liIndex=0;
     }else{
       liIndex++; 
     }
     
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
         setTimeout(function(){
            $(".typing").html('');
           tyInt = setInterval(typing,100);
         },1000);
    } 
}  

	// 높이값 재설정
	function calc_section_height(){

		let section_top = [];
		let section_height = document.querySelectorAll('section');

		for(let i=0; i<section_height.length; i++){
			section_top.push(section_height[i].offsetTop);
		}

		return section_top;
	}
	

	//변수 ht에 브라우저의 높이값을 저장
	let ht = $(window).height();	
	let window_width = window.innerWidth;

	if(window_width>1024){
		$("section").height(ht);
	}
	if(window_width<=1024){
		$("section").height('auto');
		$('.main').height(ht);
	}

	// scroll down
	$('.scroll_down a').click((e)=>{
		e.preventDefault();
		
		let profile_distance = document.querySelector('.profile').offsetTop
		$("html,body").stop().animate({"scrollTop":profile_distance},1000);
	})
	// scroll top
	$('.scroll_top a').click((e)=>{
		e.preventDefault();

		$("html,body").stop().animate({"scrollTop":0},1000);
	})

	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		//브라우저의 높이값을 section의 높이값으로 지정
		window_width = window.innerWidth;
		var ht = $(window).height();	
		if(window_width>1024){
			$("section").height(ht);
		}else{
			$("section").height('auto');
			$('.main').height(ht);
		}
		nav_reset();
		calc_section_height();
	});	
	
	//nav
	$("nav ul li").on("click",function(e){
		e.preventDefault();
		
		// height
		let ht = $(window).height();
		
		// Index
		let i = $(this).index();

		//return 값 = section 높이값 배열
		let current_top = calc_section_height();		
	
		//Move
		$('nav ul li a').removeClass('focus');
		$(this).children('a').addClass('focus');

		//top값 재설정
		$("html,body").stop().animate({"scrollTop":current_top[i]},1000);
	});
	
	const openClose = document.querySelector('.gnbOC');
	const nav = document.querySelector('nav');

	let OC = false;
	$(openClose).click((e)=>{
		e.preventDefault();

		if(OC==false){
			$(nav).animate({right:0},300);
			$('.gnbOC span').css('background','rgba(255,255,255,.0)');
			$('.gnbOC').addClass('gnbOpen');
			OC = true;
		}else{
			$(nav).animate({right:'-100%'},300);
			$('.gnbOC span').css('background','#fff');
			$('.gnbOC').removeClass('gnbOpen');
			OC = false
		}
	});

	function nav_reset(){
		let screenSize = $(window).width();
		if(screenSize > 1024){
			$(nav).css('display','block').css('right','5%');
			$(nav).removeClass('screen_mobile');

			$('.gnbOC').css({display:'none'});
			$('.gnbOC').addClass('gnbOpen');
			$('.gnbOC span').css('background','rgba(255,255,255,.0)');
		}

		if(screenSize <= 1024){
			// $(nav).css('display','none');
			$(nav).addClass('screen_mobile').css('right','-100%');

			$('.gnbOC').css({display:'block'});
			$('.gnbOC').removeClass('gnbOpen');
			$('.gnbOC span').css('background','#fff');
		}
	}
	
	nav_reset();

	$(window).on("scroll",function(){	
		//스크린 사이즈
		window_width = window.innerWidth;
		//섹션 높이
		ht = $(window).height();
		let scroll = $(window).scrollTop();		
		let section_height = calc_section_height();
		
		for(let i=0; i<section_height.length; i++){
			if(scroll>=section_height[i] && scroll<section_height[i+1]){
				$("nav li a").removeClass();
				$("nav li").eq(i).children('a').addClass("focus");
			}

			if(scroll>=section_height[section_height.length-1]){
				$("nav li a").removeClass();
				$("nav li").eq(section_height.length-1).children('a').addClass("focus");
			}
		}

		if(window_width>=1024){
			$("section").on("mousewheel",function(event,delta){    
			
			//마우스 휠을 올렸을때	
			  if (delta > 0) {  
				//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
				 let prev = $(this).prev().offset().top;
				 //문서 전체를 prev에 저장된 위치로 이동
				 $("html,body").stop().animate({"scrollTop":prev},700,"easeOutQuad");
				 // 스크롤시 버벅거림을 return false 로 해결
				 return false
				 
			//마우스 휠을 내렸을때	 
			  }else if (delta < 0) {  
				//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
				 let next = $(this).next().offset().top;
				 //문서 전체를 next에 저장된 위치로 이동
				 $("html,body").stop().animate({"scrollTop":next},700,"easeOutQuad");       
				 return false                                  
			  }
			});
		}

		//scroll top

		if(scroll<100){
			$('.scroll_top').css('display','none')
		}else{
			$('.scroll_top').css('display','block');
		}
   });
	
});




