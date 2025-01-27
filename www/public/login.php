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
	<form method="post">
		Username: <input type="text" name="user" size="20" /><br />
		Password: <input type="password" name="password" size="20" /><br />
		<input type="submit" value="Logga in" name="login" />
	</form>
</body>

</html>