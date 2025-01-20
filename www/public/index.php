<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script src="game3.js" defer></script>
   <link rel="stylesheet" href="style.css">
   <title>Document</title>
</head>
<body>
   <?php    
   	 if(isset($_SESSION['uid'])){
   		 include 'private.php';
   		 
   	 }else{
   		 include 'public.php';
   	 }
    ?>
   <h1>Spel</h1>
   <p id="score"></p>
   <button type="button" id="re">Omstart</button>
   <canvas id="board" width="450rem" height="450rem" style="border: 1px solid black;">
   Din webbläsare stödjer inte HTML5 canvas tag.</canvas>
   <section id="status">
      <p id="userStatus">Utloggad</p>
   </section>
</body>
</html>