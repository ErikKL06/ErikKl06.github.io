<?php
session_start();

if (isset($_POST['password'], $_POST['user'])) {
	include_once '../model/dbFunctions.php';
	$user = filter_input(INPUT_POST, 'user', FILTER_UNSAFE_RAW);
	$pwd = $_POST['password'];
	$user = auth($user, $pwd);


	/** Kontroll att resultat finns */
	if ($user['success']) {

		$_SESSION['uid'] = $user['uid'];
		$_SESSION['username'] = $user['username'];
		$_SESSION['email'] = $user['email'];
		header("Location: index.php");
		exit();
	}
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css">
	<title>Sessioner</title>
</head>

<body>
	<section class="loginSignup">
		<h1>Logga in</h1>
		<form method="post">
			<label for="user">Username:</label>
			<br>
			<input type="text" name="user" required size="50" />
			<br />
			<label for="password">Password:</label>
			<br>
			<input type="password" name="password" required size="50" /><br />
			<input class="submit" type="submit" value="Logga in" name="login" />


		</form>
	</section>
	<section class="loginSignup">
		<p>Inget konto?</p>
		<a href="signup.html">
			<button id="signupS">Registrera</button>
		</a>
	</section>
	<section class="loginSignup">
    <p>Fortsätt utan konto:</p>
    <a href="index.php">
      <button id="back">Hem</button>
    </a>
  </section>

</body>

</html>