<?php

include("../../model/dbFunctions.php");

$result = getAllHighscores();

echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>