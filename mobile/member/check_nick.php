<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if(!$nick) 
   {
      echo("닉네임을 입력하세요.");
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where nick='$nick' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);

      if ($num_record)
      {
         echo "<span style='color:red'>다른 닉네임을 사용하세요.</span>";
         ?>
         <script>
            $('.nickname_check dd').css({background : "rgba(255,0,0,.2)"});
         </script>
         <?   
      }
      else
      {
         echo "<span style='color:#039'>사용가능한 닉네입니다.</span>";
         ?>
         <script>
            $('.nickname_check dd').css({background : "rgba(00,100,255,.2)"});
         </script>
         <?   
      }
		 
      mysql_close();
   }
?>

