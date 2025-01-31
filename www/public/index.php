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
   <h1>Snake</h1>
   <section id="scores">
      <p id="score">Score:</p>
      <p id="highscoreHTML">Highscore:</p>
   </section>

   <button type="button" id="re">Omstart</button>
   <canvas id="board" width="450rem" height="450rem">
      Din webbläsare stödjer inte HTML5 canvas tag.</canvas>
   <section>
      <table id="highscoreTable">
         <thead>HIGHSCORES</thead>
         <tr>
            <th>USER</th>
            <th>HIGHSCORE</th>
         </tr>
      </table>
   </section>
   <section id="loginStatus">
      <?php
      if (isset($_SESSION['uid'])) {
         include 'private.php';
      } else {
         include 'public.php';
      }
      ?>
   </section>


</body>

</html>

<script>
   // Find a <table> element with id="myTable":
   let table = document.getElementById("highscoreTable");
   fetchAllHighscores();

   async function fetchAllHighscores() {
      try {
         const response = await fetch("http://localhost/api/getAllHighscores.php");
         if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
         }

         const result = await response.json();
         console.log(result);

         //Lägger till alla highscores i tabellen med en forEach loop eftersom att det är en associativ array
         result.forEach((highscore, index) => {
            let row = table.insertRow(index + 1); // Insert at the next position
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = highscore.username;
            cell2.innerHTML = highscore.highscore;
         });
      } catch (error) {
         console.error(error.message);
      }
   }
</script>