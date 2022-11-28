<?
   session_start();
?>
<meta charset="utf-8">
<?
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
   
   include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

   $sql = "select * from concert_ripple where parent='$item_num'";
   $ripple_result = mysql_query($sql);

   
?>