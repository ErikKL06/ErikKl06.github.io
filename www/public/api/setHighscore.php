<?php
include("../../inc/db.inc.php");

session_start();

$input = json_decode(file_get_contents("../test.js"), true);

if((isset($_SESSION['uid'])) && (isset($input['highscore']))){
    $highscore = (int)$input['highscore'];
    //$highscore = 3;
    $sqlkod = "UPDATE users SET highscore = :highscore WHERE uid = :uid";
    $stmt = $db->prepare($sqlkod);
    $stmt->bindValue(':uid', $_SESSION['uid']);
    $stmt->bindValue(':highscore', $highscore, PDO::PARAM_INT);
    echo $score;
    $stmt->execute();
}else{
}





