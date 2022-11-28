let raynor = [];
let kerrigan = [];
let zeratul = [];
let musicTextBox = [];
$.ajax({

        method: 'get',
        url: './data/sub3.json',
        dataType: 'json',

        success: function (data) {

            raynor = data.raynor;
            kerrigan = data.kerrigan;
            zeratul = data.zeratul;

            console.log(kerrigan);

            function dataPrint1(ind){
                let raynorSkill = '';
    
                raynorSkill = `
                <tr>
                    <th colspan="2">${raynor[ind].name}</th>
                </tr>
                <tr>
                    <th>damage</th><td>${raynor[ind].demage}</td>
                </tr>
                <tr>
                    <th>ablity</th><td>${raynor[ind].ablity}</td>
                </tr>
                <tr>
                    <th>effects</th><td>${raynor[ind].effect}</td>
                </tr>
                `;

                $('.conTop .iconText table').html(raynorSkill);
            }
            
            function dataPrint2(ind){
                let kerriganSkill = '';
    
                kerriganSkill = `
                <tr>
                    <th colspan="2">${kerrigan[ind].name}</th>
                </tr>
                <tr>
                    <th>damage</th><td>${kerrigan[ind].demage}</td>
                </tr>
                <tr>
                    <th>ablity</th><td>${kerrigan[ind].ablity}</td>
                </tr>
                <tr>
                    <th>effects</th><td>${kerrigan[ind].effect}</td>
                </tr>
                `;
                
                $('.conMid .iconText table').html(kerriganSkill);
            }
            
            function dataPrint3(ind){
                let zeratulSkill = '';
    
                zeratulSkill = `
                <tr>
                    <th colspan="2">${zeratul[ind].name}</th>
                </tr>
                <tr>
                    <th>damage</th><td>${zeratul[ind].demage}</td>
                </tr>
                <tr>
                    <th>ablity</th><td>${zeratul[ind].ablity}</td>
                </tr>
                <tr>
                    <th>effects</th><td>${zeratul[ind].effect}</td>
                </tr>
                `;

                $('.conBtm .iconText table').html(zeratulSkill);
            }
    
            $('.conTop .textShow').click(function(ind){
                ind = $(this).index('.conTop .textShow');
                dataPrint1(ind);
                $('.conTop .iconText table').animate({opacity:1},'slow');
            })
            
            $('.conMid .textShow').click(function(ind){
                ind = $(this).index('.conMid .textShow');
                dataPrint2(ind);
                $('.conMid .iconText table').animate({opacity:1},'slow');
            })
            
            $('.conBtm .textShow').click(function(ind){
                ind = $(this).index('.conBtm .textShow');
                dataPrint3(ind);
                $('.conBtm .iconText table').animate({opacity:1},'slow');
            
            })

            // audio
            let myAudio = new Audio(); 
            let playStop = true;

            musicTextBox = data.music;
            console.log(musicTextBox);

            myAudio.src = "./audio/TerranSC2-01.mp3"; 
            
            
            $('.playOn').click(function(e){
                e.preventDefault();
            
                if(playStop==true){
                    myAudio.play();
                    $('.cdPlayer img').addClass('musicOn');
                    $('.playOnStopBtn').css('background-image','url(./images/sub2/stop.png)');
                    $('.turnTable').addClass('on');
                    playStop=false;
                }else if(playStop==false){
                    myAudio.pause();
                    $('.cdPlayer img').removeClass('musicOn');
                    $('.playOnStopBtn').css('background-image','url(./images/sub2/play.png)');
                    $('.turnTable').removeClass('on');
                    playStop=true;
                };

            });
            
            $('.cdBtn').click(function(e){
                e.preventDefault();

                let ind = $(this).index('.cdBtn');
                console.log(ind);

                let musicText ='';

                musicText = `
                    <dt>${musicTextBox[ind].title}</dt>
                    <dd>${musicTextBox[ind].content}</dd>
                    <dd>${musicTextBox[ind].content2}</dd>
                `;

                $('.musicBox .cdPlayer dl').html(musicText);

                $('.bigCD').attr('src','./images/sub2/music0'+(ind+1)+'.png');

                myAudio.src = './audio/TerranSC2-0'+(ind+1)+'.mp3';

                myAudio.pause();
                $('.cdPlayer img').removeClass('musicOn');
                playStop=true;
            })

        }
});
