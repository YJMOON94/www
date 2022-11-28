<? 
	session_start(); 
	extract($_POST);
	extract($_GET);
	extract($_SESSION);
	include "../lib/dbconn.php";

	if ($mode=="modify")
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="../common/css/common.css">
        <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
        <link rel="stylesheet" href="../greet/css/write.css">

        <script src="../common/js/prefixfree.min.js"></script>
        <script src="https://kit.fontawesome.com/8bd50518e5.js" crossorigin="anonymous"></script>

        <title>삼성중공업-뉴스</title>

        <script>
            function check_input() {
                if (!document.board_form.subject.value) {
                    alert("제목을 입력하세요!");
                    document
                        .board_form
                        .subject
                        .focus();
                    return;
                }

                if (!document.board_form.content.value) {
                    alert("내용을 입력하세요!");
                    document
                        .board_form
                        .content
                        .focus();
                    return;
                }
                document
                    .board_form
                    .submit();
            }
        </script>
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
                    <a class="current" href="#">뉴스</a>
                </li>
                <li>
                    <a href="../greet/list.php">자료실</a>
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

                    <div id="col2">

                        <?
  					if($mode=="modify")
  					{
					?>
                        <form
                            name="board_form"
                            method="post"
                            action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>"
                            enctype="multipart/form-data">
                        <?
  }
  else
  {
?>
                            <form
                                name="board_form"
                                method="post"
                                action="insert.php?table=<?=$table?>"
                                enctype="multipart/form-data">
                                <?
  }
?>
                                <div id="write_form">
                                    <div id="write_row1">
                                        <div class="col1">
                                            별명
                                        </div>
                                        <div class="col2"><?=$usernick?></div>
                                    </div>
                                    <div id="write_row2">
                                        <div class="col1">
                                            <label for="titletext">제목</label>
                                        </div>
                                        <div class="col2"><input id="titletext" type="text" name="subject" value="<?=$item_subject?>"></div>
                                    </div>
                                    <div id="write_row3">
                                        <div class="col1">
                                            <label for="contenttext">내용</label>
                                        </div>
                                        <?
  									if( $userid && ($mode != "modify") )
  									{
									?>
                                        <div class="col3"><input id="checkHtml" type="checkbox" name="html_ok" value="y">
                                            HTML 쓰기</div>
                                        <?
										}
									?>
                                        <div class="col2">
                                            <textarea id="contenttext" rows="15" cols="79" name="content"><?=$item_content?></textarea>
                                        </div>
                                    </div>
                                    <div id="write_row4">
                                        <div class="col1">
                                            이미지파일1
                                        </div>
                                        <div class="col2"><label class="filechoice" for="upfile1">업로드</label><input type="file" name="upfile[]" id="upfile1"></div>
                                    </div>
                                    <? 	if ($mode=="modify" && $item_file_0)
  {
?>
                                    <div class="delete_ok"><?=$item_file_0?>
                                        파일이 등록되어 있습니다.
                                        <input type="checkbox" name="del_file[]" value="0" class="filecheck" id="delete_check">
                                        <label for="delete_check">삭제</label></div>
                                    <?
  }
?>
                                    <div id="write_row5">
                                        <div class="col1">
                                            이미지파일2
                                        </div>
                                        <div class="col2"><label class="filechoice" for="upfile2">업로드</label><input id="upfile2" type="file" name="upfile[]"></div>
                                    </div>
                                    <? 	if ($mode=="modify" && $item_file_1)
  {
?>
                                    <div class="delete_ok"><?=$item_file_1?>
                                        파일이 등록되어 있습니다.
                                        <input type="checkbox" name="del_file[]" value="1" class="filecheck">
                                        <label for="delete_check">삭제</label></div>
                                    <?
  }
?>
                                    <div id="write_row6">
                                        <div class="col1">
                                            이미지파일3
                                        </div>
                                        <div class="col2"><label class="filechoice" for="upfile3">업로드</label><input type="file" name="upfile[]" id="upfile3"></div>
                                    </div>
                                    <? 	if ($mode=="modify" && $item_file_2)
  {
?>
                                    <div class="delete_ok"><?=$item_file_2?>
                                        파일이 등록되어 있습니다.
                                        <input type="checkbox" name="del_file[]" value="2" class="filecheck">
                                        <label for="delete_check">삭제</label></div>
                                    <?
  }
?>

                                </div>

                                <div id="write_button">
                                    <button type="button" onclick="check_input()">저장</button>
                                </a>&nbsp;
                                <a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
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