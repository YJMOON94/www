<meta charset="utf-8">
<?
   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
  
    if(!$id) 
   {
      echo("아이디를 입력하세요.");
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where id='$id' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);


     
      if ($num_record)
      {
         echo "<span style='color:red'>다른 아이디를 사용하세요.</span>";
      ?>
      <script>
         $('#id_check').css({background : "rgba(255,0,0,.2)"});
      </script>
      <?   
      }
      else
      {
         echo "<span style='color:#039'>사용가능한 아이디입니다.</span>";
         ?>
         <script>
            $('#id_check').css({background : "rgba(00,100,255,.2)"});
         </script>
         <?   
      }
    
      mysql_close();
   }

?>

