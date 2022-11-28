<? 
	session_start(); 
	extract($_POST);
	extract($_GET);
	extract($_SESSION);


	$table = "concert";
    $ripple = "concert_ripple";
?>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="apple-touch-icon-precomposed" href="../common/images/app_icon.png">
        <link rel="apple-touch-startup-image" href="../common/images/startup.png">

        <link rel="stylesheet" href="../common/css/common.css">
        <link rel="stylesheet" href="../sub4/css/common.css">
        <link rel="stylesheet" href="./css/list.css">


        <script src="../common/js/prefixfree.min.js"></script>
        <script src="https://kit.fontawesome.com/8bd50518e5.js" crossorigin="anonymous"></script>

        <title>Document</title>
    </head>
<?
	include "../lib/dbconn.php";
	if(!$scale)$scale=10;			// 한 화면에 표시되는 글 수

    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>
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
                <div class="lineMap">
                    <span>home</span>&gt;<span>고객센터</span>&gt;<strong>자료실</strong>
                </div>
                <h2>뉴스</h2>
                <dl>
                    <dt>조선강국 코리아! 그 명성을 이어갈 주역을 찾습니다.</dt>
                    <dd>자체기술력과 생산능력으로 세계1위 생산량의 거의 모두를 수출하는 딜러박스 세계최고 수준의 인력과 실비 모두 대한민국의 오늘입니다.</dd>
                </dl>
            </div>
            <div id="wrap">

                <div id="content">
                    <div id="col2">

                        <form
                            name="board_form"
                            method="post"
                            action="list.php?table=<?=$table?>&mode=search">
                            <div id="list_search">
                                <div id="list_search2">
                                    <select name="find">
                                        <option value='subject'>제목</option>
                                        <option value='content'>내용</option>
                                        <option value='regist_day'>날짜</option>
                                        <option value='name'>이름</option>
                                    </select>
                                </div>
                                <div id="list_search3"><input type="text" name="search"></div>
                                <div id="list_search4">
                                    <button type="text">검색</button>
                                </div>
                            </div>
                        </form>

                        <div class="list_count">
                            <div id="list_count1">총
                                <span><?= $total_record ?></span>
                                개의 게시물이 있습니다.
                            </div>

                            <div id="list_count2">
                                <div class="layout_change">
                                    <a
                                        href="./list.php?scale=<?=$scale?>&page=<?=$page?>&liststyle=list"
                                        class="layout_change_1"></a>
                                    <a
                                        href="./list.php?scale=<?=$scale?>&page=<?=$page?>&liststyle=box"
                                        class="layout_change_2"></a>
                                </div>
                                <label for="scale" class="hidden">리스트개수</label>
                                <select
                                    id="scale"
                                    name="scale"
                                    onchange="location.href='list.php?scale='+this.value+'&liststyle=<?=$liststyle?>'">
                                    <option value=''>보기</option>
                                    <option value='1'>1</option>
                                    <option value='5'>5</option>
                                    <option value='10'>10</option>
                                </select>
                            </div>
                        </div>

                        <div id="list_content">
                            <div id="list_top_title">
                                <ul>
                                    <li id="list_title1">번호</li>
                                    <li id="list_title2">제목</li>
                                    <li id="list_title3">글쓴이</li>
                                    <li id="list_title4">등록일</li>
                                    <li id="list_title5">조회</li>
                                </ul>
                            </div>
                        <?		
 for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
 {
	mysql_data_seek($result, $i);       
	// 가져올 레코드로 위치(포인터) 이동  
	$row = mysql_fetch_array($result);       
	// 하나의 레코드 가져오기
  
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
	$item_nick    = $row[nick];
	$item_hit     = $row[hit];
	$item_date    = $row[regist_day];
	$item_date = substr($item_date, 0, 10);  
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	if($row[file_copied_0]){
		$item_img 	= './data/'.$row[file_copied_0];
	}else{
		$item_img 	= './data/default.jpg';
	}

    $sql = "select * from $ripple where parent=$item_num";
    $result2 = mysql_query($sql, $connect);
    $num_ripple = mysql_num_rows($result2);	// 해당 게시글의 덧글
?>

                            <div id="list_item">
                                <div id="list_item1"><?= $number ?></div>
                                <div id="list_item1_thumbnail"><img src="<?= $item_img?>" alt="뉴스이미지"></div>
                                <div id="list_item2">
                                    <a
                                        href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&liststyle=<?=$liststyle?>"><?= $item_subject ?></a>
                                    <?  if ($num_ripple)    echo " [$num_ripple]";  ?>
                                </div>
                                <div class="layout_inner">
                                    <div id="list_item3"><?= $item_nick ?></div>
                                    <div id="list_item4">
                                        <i class="fa-regular fa-calendar-days"></i>
                                        <?= $item_date ?></div>
                                    <div id="list_item5">
                                        <i class="fa-solid fa-eye"></i>
                                        <?= $item_hit ?></div>
                                </div>
                            </div>
                            <?
		$number--;
 }
?>
                            <!-- end of page_button -->
                        </div>
                        <div id="page_button">
                            <div id="page_num">
                                <i class="fa-solid fa-angles-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <?
// 게시판 목록 하단에 페이지 링크 번호 출력
for ($i=1; $i<=$total_page; $i++)
{
  if ($page == $i)     // 현재 페이지 번호 링크 안함
  {
      echo "<b> $i </b>";
  }
  else
  { 
      echo "<a href='list.php?table=$table&page=$i&scale=$scale&liststyle=$liststyle'> $i </a>";
  }      
}
?>
                                &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-angles-right"></i>
                            </div>
                            <div id="button">
                                <a
                                    href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>&nbsp;
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
                        <!-- end of list content -->
                        <div class="clear"></div>

                    </div>
                    <!-- end of col2 -->
                </div>
                <!-- end of content -->
            </div>
        </article>
        <!-- end of wrap -->
        <? include "../common/sub_footer.html" ?>

        <script src="../common/js/jquery-1.12.4.min.js"></script>
        <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
        <script src="../common/js/fullnav.js"></script>
    <?
        if(!$liststyle){
            $liststyle = 'list';
            echo"
            <script>
                document.querySelector('#list_content').classList.remove('on');              
            </script>
            ";

        }else if($liststyle == 'box'){
            $liststyle = 'box';
            echo"
            <script>
                    document.querySelector('#list_content').classList.add('on');    
            </script>
            ";
        }
        ?>

    </body>
</html>