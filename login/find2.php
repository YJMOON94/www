<?
   session_start();
?>
    <meta charset="UTF-8">
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 
  /*
$id='green2'
$name='홍길동'
$hp1='010'
$hp2='1111'
$hp3='2222'
  */


   if(!$id) {  /* !='없으면'*/
     echo("
           <script>
             window.alert('아이디를 입력하세요');
             //history.go(-1);
             document.find.id.focus();
           </script>
         ");
         exit;
   }

   if(!$name) {  /* !='없으면'*/
     echo("
           <script>
             window.alert('이름을 입력하세요');
             //history.go(-1);
             document.find.name.focus();
           </script>
         ");
         exit;
   }

   if(!($hp2 && $hp3)) {
     echo("
           <script>
             window.alert('연락처를 입력하세요');
             //history.go(-1);
             document.find.hp2.focus();
           </script>
         ");
         exit;
   }

   include "../lib/dbconn.php";

   $sql = "select * from member where id='$id'";
   $result = mysql_query($sql, $connect); //있으면 1, 없으면 null

   $num_match = mysql_num_rows($result);  //1 null

   if(!$num_match) //검색 레코드가 없으면
   {
     echo(" 
           <script>
             window.alert('등록되지 않은 아이디 입니다');
             history.go(-1);
           </script>
         ");
    }
    else     //검색 레코드가 있으면
    {
         $hp = $hp1."-".$hp2."-".$hp3;
        
		     $row = mysql_fetch_array($result); 
          //$row[id] ,.... $row[level]
         $sql ="select * from member where id='$id' and name='$name' and hp='$hp'";
         $result = mysql_query($sql, $connect);
         $num_match = mysql_num_rows($result); //있으면 1, 없으면 null
     
  /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
  암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함*/

        if(!$num_match) //null이면=입력된 pass가 암호화된 패스와 맞지 않다면
        {
           echo("
              <script>
                window.alert('등록된 정보가 없습니다');
                history.go(-1);
              </script>
           ");

           exit;
        }
        else  //1이면=아이디와 이름 전화번호가 모두 일치 한다면
        {
           $id = $row[id];
           $name = $row[name];
           $hp = $row[hp];
           $date = $row[regist_day];

        function generateRandomPassword($length=8, $strength=0) {
            $vowels = 'aeuy';
            $consonants = 'bdghjmnpqrstvz';  //랜덤으로 뽑아낼 기본 문자
            if ($strength & 1) {
                $consonants .= 'BDGHJLMNPQRSTVWXZ!@#$';  //추가할 문자
            }

            $password = '';
            $alt = 0;
            for ($i = 0; $i < $length; $i++) {
                if ($alt == 1) {
                    $password .= $consonants[(rand() % strlen($consonants))];
                    $alt = 0;
                } else {
                    $password .= $vowels[(rand() % strlen($vowels))];
                    $alt = 1;
                }
            }
            
            return $password;
        }

        $ranpass = generateRandomPassword(8,1);  //랜덤으로 뽑은 8자의 문자
            
        echo "
          <script>
            $('#loadtext').addClass('on').fadeIn();
          </script>
        
          <div class='loadtext_Inner'>
           <a href='#' id='close'><i class='fa-solid fa-x'></i></a>
           <p>회원정보</p>
           <ul>
             <li>임시비밀번호 : $ranpass</li>
             <li>아이디 : $id</li>
             <li>이름 : $name</li>
             <li>연락처: $hp</li>
             <li>가입일자 : $date</li>
             <li><strong>* 로그인 후 비밀번호를 변경해주세요.</strong></li>
           </ul>
           <div class='button'>
           <a href='./login_form.php'>로그인</a>
         </div>
         </div>
           
           ";
            
        $sql = "update member set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'";
        $result = mysql_query($sql, $connect);
        }
        
        
   }          
?>
