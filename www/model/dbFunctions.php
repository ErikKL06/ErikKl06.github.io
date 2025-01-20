<?php

/**
 * Anluter till databasen och returnerar ett PDO-objekt
 * @return PDO  Objektet som returneras
 */
function connectToDb()
{
  // Definierar konstanter med användarinformation.
  define('DB_USER', 'world');
  define('DB_PASSWORD', '12345');
  define('DB_HOST', 'mariadb'); // mariadb om docker annars localhost
  define('DB_NAME', 'gyprojekt');

  // Skapar en anslutning till MySql och databasen egytalk
  $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8';
  $db = new PDO($dsn, DB_USER, DB_PASSWORD);

  return $db;
}

function addUser($email, $user, $pwd)
{
  $db = connectToDb();
  /* Bygger upp sql frågan */
  $stmt = $db->prepare("INSERT INTO users(uid, username, email, password) VALUES(UUID(), :user, :fn, :pwd)"); /* inanför prepare är sql frågan */

  $stmt->bindValue(":user", $user);
  $stmt->bindValue(":fn", $email);
  $stmt->bindValue(":pwd", $pwd);

  if ($stmt->execute())
    return true;
  else
    return false;
}

function getHighscore($user){
  $db = connectToDb();
  $stmt = $db->prepare("SELECT * FROM highscore WHERE score = :score AND user = :user");
  $stmt->bindValue(":user", $user);

  $stmt->execute();

  if ($stmt->rowCount() == 1) {
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
  } else {
    return false;
  }
}

function setHighscore($user, $score){
  $db = connectToDb();
  $stmt = $db->prepare("INSERT INTO highscore(score, user) VALUES(:score, :user)");
  $stmt->bindValue(":score", $_POST['score']);
  $stmt->bindValue(":user", $_POST['user']);

  if ($stmt->execute())
    return true;
  else
    return false;
}

function auth($user, $pwd)
{
  $db = connectToDb();
  /* Bygger upp sql frågan */
  $stmt = $db->prepare("SELECT * FROM users WHERE username = :user");
  $stmt->bindValue(":user", $user);

  $stmt->execute();

  $result['success'] = false;

  /** Kontroll att resultat finns */
  if ($stmt->rowCount() == 1) {
    // Hämtar användaren, kan endast kunna vara 1 person
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    // Kontrollerar lösenordet, och allt ok.
    if (password_verify($pwd, $user['password'])) {
      $result['success'] = true;
      $result['uid'] = $user['uid'];
      $result['username'] = $user['username'];
      $result['email'] = $user['email'];
    }
  }

  return $result;
}
