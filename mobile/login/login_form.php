<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="./css/login.css">
    <link rel="stylesheet" href="./css/reset.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>

    <header>
		<h1><a href="../index.html">삼성중공업 로고</a></h1>
	</header>

	<article id="content">
		<h2>Login</h2>
		<p class="summary">아이디와 비밀번호를 입력하세요.</p>

		<div class="login_wrap">

			<form  name="member_form" method="post" action="./login.php">
				<ul>
					<li>
						<label for="id" class="hidden">아이디</label>
						<input type="text" name="id" id="id" placeholder="아이디를 입력하세요">
					</li>
					<li>
						<label for="pass" class="hidden">비밀번호</label>
						<input type="password" name="pass" id="pass" placeholder="비밀번호를 입력하세요">
					</li>
				</ul>
				<button type="submit"><span>로그인</span></button>
			</form>

			<ul class="find_link">
				<li><a href="./id_find.php">아이디 찾기</a></li>
				<li><a href="./pw_find.php">비밀번호 찾기</a></li>
			</ul>

			<div class="join_link">
				아이디가 없으신 분은 회원가입을 해주세요
				<a href="../member/member_form.php">회원가입</a>
			</div>
		</div>
	</article>

</body>
</html>