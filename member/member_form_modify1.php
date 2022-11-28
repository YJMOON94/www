<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>회원정보수정</title>
        <link rel="stylesheet" href="./css/signup.css">

        <script src="./js/jquery-1.12.4.min.js"></script>
        <script src="./js/jquery-migrate-1.4.1.min.js"></script>

        <script>
            $(document).ready(function () {

                //nick 중복검사
                $("#nick").keyup(function () { // id입력 상자에 id값 입력시
                    let nick = $('#nick').val();

                    $.ajax({
                        type: "POST",
                        url: "check_nick.php",
                        data: "nick=" + nick,
                        cache: false,
                        success: function (data) {
                            $("#loadtext2").html(data);
                        }
                    });
                });

                $('#pass, #pass_confirm').keyup(function(){
                    if (document.member_form.pass_confirm.value != document.member_form.pass.value || !document.member_form.pass_confirm.value || !document.member_form.pass.value) {
                        $('#loadtext3')
                        .css('color', '#f00')
                        .text('비밀번호가 일치하지 않습니다');
                        $('.pass_check').css({background: "rgba(255,0,0,.2)"});
                        $('.pass_confirm').css({background: "rgba(255,0,0,.2)"});
                    } else {
                        console.log(document.member_form.pass_confirm.value,document.member_form.pass.value);
                        $('#loadtext3')
                            .css('color', '#039')
                            .text('비밀번호가 일치합니다');
                        $('.pass_check').css({background: "rgba(00,100,255,.2)"});
                        $('.pass_confirm').css({background: "rgba(00,100,255,.2)"});
                    }
                })

            });
        </script>
        <script>

            function check_input() {

                if (!document.member_form.pass.value) {
                    alert("비밀번호를 입력하세요");
                    document
                        .member_form
                        .pass
                        .focus();
                    return;
                }

                if (!document.member_form.pass_confirm.value) {
                    alert("비밀번호확인을 입력하세요");
                    document
                        .member_form
                        .pass_confirm
                        .focus();
                    return;
                }

                if (!document.member_form.name.value) {
                    alert("이름을 입력하세요");
                    document
                        .member_form
                        .name
                        .focus();
                    return;
                }

                if (!document.member_form.nick.value) {
                    alert("닉네임을 입력하세요");
                    document
                        .member_form
                        .nick
                        .focus();
                    return;
                }

                if (!document.member_form.hp2.value || !document.member_form.hp3.value) {
                    alert("휴대폰 번호를 입력하세요");
                    document
                        .member_form
                        .nick
                        .focus();
                    return;
                }

                if (document.member_form.pass.value != document.member_form.pass_confirm.value) {
                    alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
                    document
                        .member_form
                        .pass
                        .focus();
                    document
                        .member_form
                        .pass
                        .select();
                    return;
                }

                document
                    .member_form
                    .submit();
                // insert.php 로 변수 전송
                
            }

            function reset_form() {
                document.member_form.id.value = "";
                document.member_form.pass.value = "";
                document.member_form.pass_confirm.value = "";
                document.member_form.name.value = "";
                document.member_form.nick.value = "";
                document.member_form.hp1.value = "010";
                document.member_form.hp2.value = "";
                document.member_form.hp3.value = "";
                document.member_form.email1.value = "";
                document.member_form.email2.value = "";

                document
                    .member_form
                    .id
                    .focus();

                return;
            }
        </script>
    </head>
<?
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]);
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
    <body>
        <header>
            <a class="logo" href="../index.html"><img src="./images/logo.png" alt="삼성중공업로고"></a>
        </header>
        <article id="content">
            <h2>회원정보수정</h2>
            <form name="member_form" method="post" action="./modify.php">
                <section>
                    <dl id="id_check">
                        <dt>
                            <label for="id">아이디</label>
                        </dt>
                        <dd>
                            <span class="modify"><?= $row[id]?></span>
                        </dd>
                    </dl>
                    <dl class="pass_check">
                        <dt>
                            <label for="pass">비밀번호</label>
                        </dt>
                        <dd>
                            <input type="password" name="pass" id="pass" required="required" placeholder="비밀번호를 입력하세요">
                            <span id="loadtext3"></span>
                        </dd>
                    </dl>
                    <dl class="pass_confirm">
                        <dt>
                            <label for="pass_confirm">비밀번호 확인</label>
                        </dt>
                        <dd>
                            <input
                                type="password"
                                name="pass_confirm"
                                id="pass_confirm"
                                required="required"
                                placeholder="비밀번호를 입력하세요">
                            <span id="loadtext3"></span>
                        </dd>
                    </dl>
                    <dl class="name_check">
                        <dt>
                            <label for="name">이름</label>
                        </dt>
                        <dd>
                            <input type="text" name="name" id="name" required="required" placeholder="이름을 입력하세요" value="<?= $row[name]?>">
                        </dd>
                    </dl>
                    <dl class="nickname_check">
                        <dt>
                            <label for="nick">닉네임</label>
                        </dt>
                        <dd>
                            <input type="text" name="nick" id="nick" required="required" placeholder="닉네임을 입력하세요" value="<?= $row[nick]?>">
                            <span id="loadtext2"></span>
                        </dd>
                    </dl>
                    <dl class="flexBox" class="phone_check">
                        <dt>
                            휴대폰
                        </dt>
                        <dd>
                            <label class="hidden" for="hp1"></label>
                            <select class="hp" name="hp1" id="hp1">
                                <option value='010' <? if($hp1 == '010') echo 'selected'; ?>>010</option>
                                <option value='011' <? if($hp1 == '011') echo 'selected'; ?>>011</option>
                                <option value='016' <? if($hp1 == '016') echo 'selected'; ?>>016</option>
                                <option value='017' <? if($hp1 == '017') echo 'selected'; ?>>017</option>
                                <option value='018' <? if($hp1 == '018') echo 'selected'; ?>>018</option>
                                <option value='019' <? if($hp1 == '019') echo 'selected'; ?>>019</option>
                            </select>
                            <span>-</span>
                            <label class="hidden" for="hp2"></label><input type="text" class="hp" name="hp2" id="hp2" required="required" placeholder="ex)1234" value="<?= $hp2?>">
                            <span>-</span>
                            <label class="hidden" for="hp3"></label><input type="text" class="hp" name="hp3" id="hp3" required="required" placeholder="ex)1234" value="<?= $hp3?>">
                        </dd>
                    </dl>
                    <dl class="flexBox" class="email_check">
                        <dt>
                            이메일
                        </dt>
                        <dd>
                            <label class="hidden" for="email1"></label>
                            <input type="text" id="email1" name="email1" required="required" placeholder="email" value="<?= $email1?>">
                            <span>@</span>
                            <label class="hidden" for="email2"></label>
                            <input type="text" name="email2" id="email2" required="required" placeholder="naver.com" value="<?= $email2?>">
                        </dd>
                    </dl>
                    <div class="signUp">
                        <div>
                            <a href="#" onclick="check_input()">수정완료</a>&nbsp;&nbsp;
                            <a href="#" onclick="reset_form()">취소</a>
                        </div>
                    </div>
                </section>

            </form>

        </article>
    </body>
</html>