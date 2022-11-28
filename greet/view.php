<? 
	session_start(); 

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 
	/*
	$num=1 => primary key 번호
	$page
	$scale 
	*/
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="../common/css/common.css">
        <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
        <link rel="stylesheet" href="./css/view.css">

        <script src="../common/js/prefixfree.min.js"></script>
        <script src="https://kit.fontawesome.com/8bd50518e5.js" crossorigin="anonymous"></script>

        <script>
            function del(href) {
                if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                    document.location.href = href;
                }
            }
        </script>
        <title>Document</title>

    </head>
    <body>
        <? include "./common/sub_header.html" ?>

        <div class="main">
            <img src="../sub6/common/images/main.jpg" alt="">
            <h3>자료실</h3>
        </div>
        <div class="subNav">
            <ul>
                <li>
                    <a href="../concert/list.php">뉴스</a>
                </li>
                <li>
                    <a class="current" href="#">자료실</a>
                </li>
                <li>
                    <a href="../sub6/sub6_3.html">QnA</a>
                </li>
                <li>
                    <a href="../sub6/sub6_4.html">일정</a>
                </li>
            </ul>
        </div>
        <article id="content">
            <div class="titleArea">
                <div class="lineMap">
                    <span>home</span>&gt;<span>고객센터</span>&gt;<strong>자료실</strong>
                </div>
                <h2>자료실</h2>
                <dl>
                    <dt>조선강국 코리아! 그 명성을 이어갈 주역을 찾습니다.</dt>
                    <dd>자체기술력과 생산능력으로 세계1위 생산량의 거의 모두를 수출하는 딜러박스 세계최고 수준의 인력과 실비 모두 대한민국의 오늘입니다.</dd>
                </dl>
            </div>
            <div id="wrap">

                <div id="content">
                    <div id="col1">
                        <div id="left_menu">
                            <?
			include "../lib/left_menu.php";
							?>
                        </div>
                    </div>

                    <div id="col2">
                        <div id="view_title">
                            <div id="view_title1"><?= $item_subject ?></div>
                            <div id="view_title2">
								<?= $item_nick ?>
                                | 조회 :
                                <?= $item_hit ?>
                                |
                                <?= $item_date ?>
                            </div>
                        </div>

                        <div id="view_content">
						<h3><?= $item_subject ?></h3>
                            <?= $item_content ?>
                        </div>

                        <div id="view_button">
                            <a href="list.php?page=<?=$page?>&scale=<?=$scale?>">목록</a>&nbsp;
                            <? if($userid==$item_id || $userlevel==1 || $userid=="admin"){	?>

                            <a href="modify_form.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>">수정</a>&nbsp;
                            <a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;

                            <?	}	?>
                            <? if($userid ){ ?>
                            <a href="write_form.php?page=<?=$page?>&scale=<?=$scale?>">글쓰기</a>
                            <?	}	?>
                        </div>

                        <div class="clear"></div>

                    </div>
                    <!-- end of col2 -->
                </div>
                <!-- end of content -->
            </div>
        </article>
        <!-- end of wrap -->
        <? include "./common/sub_footer.html" ?>
    </body>
</html>