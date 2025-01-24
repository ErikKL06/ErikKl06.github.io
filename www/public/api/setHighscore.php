<?php
include("../../inc/db.inc.php");

session_start();

$input = json_decode(file_get_contents("php://input"), true);
echo json_encode($input);


if (!$input) {
    echo json_encode(['status' => 'error', 'message' => 'No input received']);
    exit;
}

if (!isset($_SESSION['uid'])) {
    echo json_encode(['status' => 'error', 'message' => 'No session UID']);
    exit;
}

if (!isset($input['highscore'])) {
    echo json_encode(['status' => 'error', 'message' => 'No highscore received']);
    exit;
}


if((isset($_SESSION['uid'])) && (isset($input['highscore']))){
    $highscore = (int)$input['highscore'];
    //$highscore = 3;
    $sqlkod = "UPDATE users SET highscore = :highscore WHERE uid = :uid";
    $stmt = $db->prepare($sqlkod);
    $stmt->bindValue(':uid', $_SESSION['uid']);
    $stmt->bindValue(':highscore', $highscore, PDO::PARAM_INT);
    echo $score;
    $stmt->execute();
    echo json_encode(['status' => 'success', 'highscore' => $highscore]);
}else{
    echo json_encode(['status' => 'error', 'message' => 'Invalid input or session']);
}





