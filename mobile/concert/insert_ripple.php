<?
   session_start();
?>
<meta charset="utf-8">
<?
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	
   if(!$userid) {
     echo("
	   <script>
	     window.alert('로그인 후 이용하세요.')
	     history.go(-1)
	   </script>
	 ");
	 exit;
   }

   include "../lib/dbconn.php";
   $regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장


   if($mode=='modify'){

		$sql2 = "update concert_ripple set content='$ripple_modify_textarea', regist_day='$regist_day' where num=$ripple_num";

		mysql_query($sql2, $connect);  // $sql2 에 저장된 명령 실행
	}else{

	   // 레코드 삽입 명령
	   $sql = "insert into concert_ripple (parent, id, name, nick, content, regist_day) ";
	   $sql .= "values($num, '$userid', '$username', '$usernick', '$ripple_content', '$regist_day')";    
	   
	   mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
	}
	
	mysql_close();                // DB 연결 끊기
 
	echo "
		<script>
		 location.href = 'view.php?table=$table&num=$num&page=$page';
		</script>
	 ";
	
?>

   
