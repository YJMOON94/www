<?
   session_start();
   extract($_POST);
	extract($_GET);
	extract($_SESSION);
   include "../lib/dbconn.php";

   $sql = "select * from $table where num = $num";
   $result = mysql_query($sql, $connect);

   $row = mysql_fetch_array($result);

   $copied_name[0] = $row[file_copied_0];
   $copied_name[1] = $row[file_copied_1];
   $copied_name[2] = $row[file_copied_2];

   for ($i=0; $i<3; $i++)
   {
		if ($copied_name[$i]) // 첨부된 파일이 존재하면
	   {
			$image_name = "./data/".$copied_name[$i];
			unlink($image_name);
	   }
   }

   $sql = "delete from $table where num = $num";
   mysql_query($sql, $connect);

   $sql2 = "delete from concert_ripple where parent = $num";
   mysql_query($sql2, $connect); // 해당 글 댓글 data 삭제

   mysql_close();

   echo "
	   <script>
	    location.href = 'list.php?table=$table';
	   </script>
	";
?>

