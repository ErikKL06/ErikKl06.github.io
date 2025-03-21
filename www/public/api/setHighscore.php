<?php
include("../../model/dbFunctions.php");

session_start();
header("Access-Control-Allow-Origin: *");
$input = json_decode(file_get_contents("php://input"), true);
echo json_encode($input);

//kollar eventuella fel
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


if ((isset($_SESSION['uid'])) && (isset($input['highscore']))) {
    $highscore = (int)$input['highscore'];
    //$highscore = 3;

    setHighscore($highscore);

    echo json_encode(['status' => 'success', 'highscore' => $highscore]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input or session']);
}
