<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>utloggad</title>
</head>

<body>
    <button type="button" id="loginB">Logga in</button>
    <button type="button" id="signupB">Registrera</button>
</body>

</html>

<script>
    loginB.addEventListener('click', () => {
        location.href = "login.php";
    });

    signupB.addEventListener('click', () => {
        location.href = "signup.html";
    });
</script>