<? 
	session_start(); 
	/*
	$num / $page / $scale
	*/
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="../common/css/common.css">
        <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
		<link rel="stylesheet" href="./css/write.css">

        <script src="../common/js/prefixfree.min.js"></script>
        <script src="https://kit.fontawesome.com/8bd50518e5.js" crossorigin="anonymous"></script>

        <title>Document</title>
    </head>
    <body>
        <? include "../common/sub_header.html" ?>

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
                    <a href="./sub6_3.html">QnA</a>
                </li>
                <li>
                    <a href="./sub6_4.html">일정</a>
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
                    <!-- end of col1 -->

                    <div id="col2">

                        <form
                            name="board_form"
                            method="post"
                            action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>">
                            <div id="write_form">
                                <div class="write_line"></div>
                                <div id="write_row1">
                                    <div class="col1">
                                        닉네임
                                    </div>
                                    <div class="col2"><?=$usernick?></div>
                                </div>
                                <div class="write_line"></div>
                                <div id="write_row2">
                                    <div class="col1">
                                        제목
                                    </div>
                                    <div class="col2"><input type="text" name="subject" value="<?=$item_subject?>"></div>
                                </div>
                                <div class="write_line"></div>
                                <div id="write_row3">
                                    <div class="col1">
                                        내용
                                    </div>
                                    <div class="col2">
                                        <textarea rows="15" cols="79" name="content"><?=$item_content?></textarea>
                                    </div>
                                </div>
                                <div class="write_line"></div>
                            </div>

                            <div id="write_button">
                                <button type="submit">작성완료</button>
                                <a href="list.php?page=<?=$page?>&scale=<?=$scale?>">목록</a>
                            </div>
                        </form>

                    </div>
                    <!-- end of col2 -->
                </div>
                <!-- end of content -->
            </div>
            <!-- end of wrap -->
        </article>
    </body>
</html>