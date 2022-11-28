<?
    $connect=mysql_connect( "localhost", "yjm", "1234") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("yjm_db",$connect);
?>
