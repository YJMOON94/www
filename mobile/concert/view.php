<? 
	session_start(); 
	extract($_POST);
	extract($_GET);
	extract($_SESSION);
	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	//첨부된 이미지 가져오기
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) // 첨부된 이미지 있으면 
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			// 배열로 리턴 [이미지너비, 높이, 타입]
			$image_width[$i] = $imageinfo[0]; //너비
			$image_height[$i] = $imageinfo[1]; //높이
			$image_type[$i]  = $imageinfo[2]; //타입

			if ($image_width[$i] > 785)
				$image_width[$i] = 785;
		}
		else // 없으면
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="../common/css/common.css">
        <link rel="stylesheet" href="../sub4/css/common.css">
        <link rel="stylesheet" href="./css/view.css">
        <link rel="stylesheet" href="./css/ripple.css">

        <script src="../common/js/prefixfree.min.js"></script>
        <script src="../common/js/jquery-1.12.4.min.js"></script>
        <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
        <script src="https://kit.fontawesome.com/8bd50518e5.js" crossorigin="anonymous"></script>

        <title>삼성중공업-뉴스</title>

        <script>
            function del(href) {
                if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                    document.location.href = href;
                }
            }

            function check_input() {
                if (!document.ripple_form.ripple_content.value)
                    {
                        alert("내용을 입력하세요!");    
                        document.ripple_form.ripple_content.focus();
                        return;
                    }
                    document.ripple_form.submit();
            }
            
            let complete_cancle = true;

            // $(document).on('click','.modify_button',function(e){
            //     e.preventDefault();

            //     if(complete_cancle == true){
            //         $('.modify_button').text('[취소]');
            //         $(this).children('form').css('display','block');
            //         $(this).children('span').css('display','none');

            //         complete_cancle = false;
            //     }else{
            //         $('.modify_button').text('[수정]');
            //         $(this).children('form').css('display','none');
            //         $(this).children('span').css('display','block');

            //         complete_cancle = true;
            //     };
            // });


    </script>
    </head>
    <body>
        <? include "../common/sub_header.html" ?>
        <div class="main">
            <h2>고객센터</h2>
        </div>
        <div class="subnav">
            <a href="#">뉴스<span>
                    <i class="fa-solid fa-caret-down"></i></span></a>
            <ul>
                <li>
                    <a href="../sub4/sub4_2.html">일정</a>
                    <a href="../concert/list.php">뉴스</a>
                </li>
            </ul>
        </div>
        <article id="content">
            <div class="titleArea">

                <h2>뉴스</h2>
                <dl>
                    <dt>조선강국 코리아! 그 명성을 이어갈 주역을 찾습니다.</dt>
                    <dd>자체기술력과 생산능력으로 세계1위 생산량의 거의 모두를 수출하는 딜러박스 세계최고 수준의 인력과 실비 모두 대한민국의 오늘입니다.</dd>
                </dl>
            </div>
            <div id="wrap">

                <div id="content">

                    <div id="col2">

                        <div id="view_title">
                            <div id="view_title1"><?= $item_subject ?></div>
                            <div id="view_title2"><?= $item_nick ?>
                                | 조회 :
                                <?= $item_hit ?>
                                |
                                <?= $item_date ?>
                            </div>
                        </div>

                        <div id="view_content">
                            <h3><?= $item_subject ?></h3>
                            <?
  for ($i=0; $i<3; $i++)
  {
	  if ($image_copied[$i])
	  {
		  $img_name = $image_copied[$i];
		  $img_name = "./data/".$img_name;
		  $img_width = $image_width[$i];
		  
		  echo "<img src='$img_name' width='$img_width'>"."<br><br>";
	  }
  }
?>
                            <?= $item_content ?>
                        </div>

                        <!-- ripple start -->
                        <div id="ripple">
                            <?
                                $sql = "select * from concert_ripple where parent='$item_num'";
                                $ripple_result = mysql_query($sql);

                                while ($row_ripple = mysql_fetch_array($ripple_result))
                                {
                                    $ripple_num     = $row_ripple[num];
                                    $ripple_id      = $row_ripple[id];
                                    $ripple_nick    = $row_ripple[nick];
                                    $ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
                                    $ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
                                    $ripple_date    = $row_ripple[regist_day];

                            ?>
                            <div id="ripple_writer_title">
                                <ul>
                                    <li id="writer_title1"><?=$ripple_nick?></li>
                                    <li id="writer_title2"><?=$ripple_date?></li>
                                    <li id="writer_title3">
                                        <? 
                                            if($userid=="admin" || $userid==$ripple_id){
                                            echo "<a href='delete_ripple.php?table=$table&num=$item_num&ripple_num=$ripple_num'>[삭제]</a>"; 
                                            echo "<a class='modify_button' href='#'>[수정]</a>";
                                            };
                                        ?>
                                    </li>
                                </ul>
                                <div id="ripple_content">
                                    <form  method="post" action="./insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&ripple_num=<?=$ripple_num?>&mode=modify" name="ripple_modify">
                                        <textarea name="ripple_modify_textarea" cols="65" rows="2"><?= $ripple_content?></textarea>
                                        <input type="submit" value="입력">
                                    </form>
                                    <span><?= $ripple_content ?></span>
                                </div>
                            </div>
                            <?
                                }
                            ?>
                            <form
                                name="ripple_form"
                                method="post"
                                action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&ripple_num=<?=$ripple_num?>">
                                <div id="ripple_box">
                                    <div id="ripple_box2">
                                        <textarea rows="2" cols="65" name="ripple_content" plcaeholder="댓글을 입력하세요"></textarea>
                                    </div>
                                    <div id="ripple_box3">
                                        <a href="#" onclick="check_input()">입력</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- ripple end -->

                        <div id="view_button">
                            <a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>&nbsp;
                            <? 
  if($userid==$item_id || $userid=="admin" || $userlevel==1 )
  {
?>
                            <a
                                href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
                            <a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a>&nbsp;
                            <?
  }
?>
                            <? 
  if($userid)
  {
?>
                            <a href="write_form.php?table=<?=$table?>">글쓰기</a>
                            <?
  }
?>
                        </div>

                    </div>
                    <!-- end of col2 -->
                </div>
                <!-- end of content -->
            </div>
            <!-- end of wrap -->
        </article>
        <? include "../common/sub_footer.html" ?>
    </body>
    <script>
        let modify_button = document.querySelectorAll('.modify_button');

        console.log(modify_button);


        modify_button.forEach((e)=>{

            function ripple_modify(){

                let formTag = e.parentNode.parentNode.nextSibling.nextSibling.childNodes[1];
                let spanTag = e.parentNode.parentNode.nextSibling.nextSibling.childNodes[3];
                
                console.log(e.parentNode.parentNode.nextSibling.nextSibling.childNodes);

                if(complete_cancle == true){
            
                    e.innerText='[취소]';
                    complete_cancle = false;

                    spanTag.style.display = 'none';
                    formTag.style.display = 'block';
            
                }else{
            
                    e.innerText='[수정]';  
                    complete_cancle = true;
            
                    spanTag.style.display = 'block';
                    formTag.style.display = 'none';
            
                }
            };

            e.addEventListener('click',(e)=>{
                e.preventDefault();
                ripple_modify();
            });

        });

    </script>
</html>