<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>
<!DOCTYPE html>
<html lang="ko">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>삼성중공업-아이디찾기</title>
        <link rel="stylesheet" href="./css/reset.css">
        <link rel="stylesheet" href="./css/login.css">

        <script src="https://kit.fontawesome.com/8bd50518e5.js" crossorigin="anonymous"></script>
        <script src="../member/js/jquery-1.12.4.min.js"></script>
        <script src="../member/js/jquery-migrate-1.4.1.min.js"></script>
        <script>
            $(document).ready(function () {

                $(".find").click(function () { // id입력 상자에 id값 입력시
                    var name = $('#name').val(); //홍길동
                    var hp1 = $('#hp1').val(); //010
                    var hp2 = $('#hp2').val(); //1111
                    var hp3 = $('#hp3').val(); //2222

                    $.ajax({
                        type: "POST",
                        url: "find.php",
                        data: "name=" + name + "&hp1=" + hp1 + "&hp2=" + hp2 + "&hp3=" + hp3,
                        /*매개변수id도 같이 넘겨줌*/
                        cache: false,
                        success: function (data)/*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
                        {
                            $("#loadtext").html(data);/*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
                        }
                    });

                    $(document).on('click', '#loadtext #close', function () {
                        $('#loadtext').fadeOut();
                    });

                });
            });
        </script>
    </head>
    <body>
        <header>
            <h1>
                <a href="../index.html">삼성중공업 로고</a>
            </h1>
        </header>

        <article id="content">
            <h2>아이디 찾기</h2>
            <p class="summary">가입 시 입력하신 정보로 아이디를 찾아드립니다</p>

            <div class="login_wrap">
                <form name="find" method="post" action="find.php">
                    <ul>
                        <li>
                            <label for="id" class="hidden">아이디</label>
                            <input type="text" name="name" id="name" placeholder="이름을 입력하세요">
                        </li>
                        <li class="hp">
                            <label class="hidden" for="hp1">연락처 앞3자리</label>
                            <select name="hp1" id="hp1" title="휴대폰 앞3자리를 선택하세요." class="find_input">
                                <option>010</option>
                                <option>011</option>
                                <option>016</option>
                                <option>017</option>
                                <option>018</option>
                                <option>019</option>
                            </select>
                            <span>-</span>
                            <label class="hidden" for="hp2">연락처 가운데4자리</label>
                            <input type="text" id="hp2" name="hp2" maxlength="4" placeholder="(ex. 1111)">
                            <span>-</span>
                            <label class="hidden" for="hp3">연락처 마지막4자리</label>
                            <input type="text" id="hp3" name="hp3" maxlength="4" placeholder="(ex. 1111)">
                        </li>
                    </ul>

                    <div id="loadtext"></div>

                    <button type="button" class="find">
                        <span>아이디 찾기</span></button>

                </form>

                <ul class="find_link">
                    <li>
                        <a href="./login_form.php">로그인하기</a>
                    </li>
                    <li>
                        <a href="./pw_find.php">비밀번호 찾기</a>
                    </li>
                </ul>

                <div class="join_link">
                    아이디가 없으신 분은 회원가입을 해주세요
                    <a href="../member/member_form.php">회원가입</a>
                </div>

            </div>
        </article>
    </body>
</html>