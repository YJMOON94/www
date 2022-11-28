// animals
let animalData = [];
let lionURL = [];
let whaleURL = [];
let penguinURL = [];
let mainURL = [];
let videoText =[];
let i = 0;
let j = 0;
let z = 0;

$.ajax({
  method: "get",
  url: "./data/animal.json",
  dataType: "json",

  success: function (data) {
    animalData = data.animals;

    $(".animals .imgBox").click(function (e) {
      e.preventDefault();
      i = $(this).index(".animals .imgBox");

      let dataPrint = `
            <dt><strong>${animalData[i].subtitle}</strong></dt>
            <dd>${animalData[i].content}</dd>
            `;

      $(".getAnimalData").html(dataPrint);
      $(".modal-title").html(animalData[i].title);
      $(".modal-content img")
        .attr("src", `./images/animals/animal0${i + 1}.jpg`)
        .attr("alt", `${animalData[i].subtitle}`);
    });

    // video

    lionURL = data.lionURL;
    whaleURL = data.whaleURL;
    penguinURL = data.penguinURL;
    mainURL = data.mainURL;
    videoText = data.videoText;

    
    $(".subVideoBox .subVideo").click(function () {
      j = $(this).index(".subVideoBox .subVideo");
      
      if($('.subVideoBox .subVideo').hasClass('lion')){
        $(".youtubeBox iframe").attr("src", lionURL[j].url);
      };
    
      if($('.subVideoBox .subVideo').hasClass('whale')){
        $(".youtubeBox iframe").attr("src", whaleURL[j].url);
      };
    
      if($('.subVideoBox .subVideo').hasClass('penguin')){
        $(".youtubeBox iframe").attr("src", penguinURL[j].url);
      };

    });
    
    $('.tabmenu ul li a').click(function(e){
      e.preventDefault();
      z = $(this).index('.tabmenu ul li a');

      $('.tabmenu ul li a').css('background-color','rgba(0,0,0,0)').css('color','#fff');
      $(this).css('background-color','rgba(255, 255, 255,.8)').css('color','#333').css('text-decoration','none');

      $('.video').css('background-image',`url('./images/video/video0${z+1}_00.jpg')`);
      $('.youtubeBox iframe').attr('src',mainURL[z].url);
      
      $(`.subVideo.subV1`).css('background-image',`url('./images/video/video0${z+1}_01.jpg')`);
      $('.subVideo.subV2').css('background-image',`url('./images/video/video0${z+1}_02.jpg')`);
      $('.subVideo.subV3').css('background-image',`url('./images/video/video0${z+1}_03.jpg')`);
      
      if(z==0){
        $('.subVideo').removeClass('penguin').removeClass('whale');
        $('.subVideo').addClass('lion');
      }else if(z==1){
        $('.subVideo').removeClass('lion').removeClass('penguin');
        $('.subVideo').addClass('whale');
      }else if(z==2){
        $('.subVideo').removeClass('lion').removeClass('whale');
        $('.subVideo').addClass('penguin');
      }

      let textPrint = `
      <dt>${videoText[z].title}</dt>
      <dd>${videoText[z].content1}</dd>
      <dd>${videoText[z].content2}</dd>
      <dd>${videoText[z].content3}</dd>
    `;

    $('.videoText').html(textPrint);
    })

  }
});

// scroll events

$(window).scroll(function () {

  let animalTop = $(".animals").offset().top;
  let phenomenonTop = $(".phenomenon").offset().top;
  let videoTop = $(".video").offset().top;
  let countryTop = $(".country").offset().top;

  console.log(animalTop);
  let height = $(window).scrollTop();
  
  console.log(height);
  if (height < 300)$(".moveTop").fadeOut();
  if (height > 300)$(".moveTop").fadeIn();

  if (height > animalTop-400)$('.animals').addClass('scrollOn');
  if (height > phenomenonTop-400)$('.phenomenon').addClass('scrollOn');
  if (height > videoTop-400)$('.video').addClass('scrollOn');
  if (height > countryTop-400) $('.country').addClass('scrollOn');

  let cnt = null;

    if(height>=100 && height<animalTop){
        cnt=0;
    }else if(height>=animalTop && height<phenomenonTop){
        cnt=1;
    }else if(height>=phenomenonTop && height<videoTop){
        cnt=2;
    }else if(height>=videoTop){
        cnt=3;
    }

    $('.topnav li a').removeClass('scrollSPY');
    $('.topnav li:eq('+cnt+') a').addClass('scrollSPY');
});

// scroll spy
