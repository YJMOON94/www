<? 
	session_start(); 
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 
?>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <link rel="stylesheet" href="../common/css/common.css">
        <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
        <link rel="stylesheet" href="./css/write.css">

        <script src="../common/js/prefixfree.min.js"></script>
        <script src="https://kit.fontawesome.com/8bd50518e5.js" crossorigin="anonymous"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

                <div>

                    <div id="col2">

                        <form
                            name="board_form"
                            method="post"
                            action="insert.php?page=<?=$page?>&scale=<?=$scale?>">
                            <div id="write_form">
                                <div id="write_row1">
                                    <div class="col1">
                                        작성자
                                    </div>
                                    <div class="col2"><?=$usernick?></div>
                                </div>
                                <div id="write_row2">
                                    <div class="col1">
                                        <label for="titletext">제목</label>
                                    </div>
                                    <div class="col2"><input id="titletext" type="text" name="subject" placeholder="제목을 입력하세요"></div>
                                </div>
                                <div id="write_row3">
                                    <div class="col1">
                                        <label for="contenttext">내용</label>
                                    </div>
                                    <div class="col3">
                                        <label for="checkHtml">HTML 쓰기</label><input id="checkHtml" type="checkbox" name="html_ok" value="y">
                                    </div>
                                    <div class="col2">
                                        <textarea
                                            id="contenttext"
                                            rows="15"
                                            cols="79"
                                            name="content"
                                            placeholder="내용을 입력하세요"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div id="write_button">
                                <button type="submit">저장</button>
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
        <? include "../common/sub_footer.html" ?>
    </body>
</html>