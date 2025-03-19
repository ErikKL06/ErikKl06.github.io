<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Inloggad</title>
</head>

<body>
    <section>
        <button type="button" id="loggoutB">Logga ut</button>
    </section>
</body>

</html>

<script>
    loggoutB.addEventListener('click', () => {
        fetch('loggout.php')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                location.reload();
            });
    });
</script>