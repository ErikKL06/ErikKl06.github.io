<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inloggad</title>
</head>
<body>
    <section>
        <?php echo "user: " . $_SESSION['username']; ?>
        <a href="loggout.php">Logga ut</a>
    </section>
</body>
</html>